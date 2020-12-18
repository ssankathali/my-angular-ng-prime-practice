// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms'


// @Component({
//     templateUrl: './reactive.component.html',
// })
// export class ReactiveComponent implements OnInit {
//     title = 'Reactive Forms';
//     countryList: country[] = [
//         new country("1", "India"),
//         new country('2', 'USA'),
//         new country('3', 'England')
//     ];


//     reactiveForm = new FormGroup({
//         firstname: new FormControl(),
//         lastname: new FormControl(),
//         email: new FormControl(),
//         gender: new FormControl(),
//         isMarried: new FormControl(),
//         country: new FormControl(),
//         address: new FormGroup({
//             city: new FormControl(),
//             street: new FormControl(),
//             pincode: new FormControl()
//         })
//     })

//     onSubmit() {
//         console.log(this.reactiveForm.value);
//     }

//     ngOnInit() {
//         this.setDefault();
//     }

//     setDefault() {

//         let contact = {
//             firstname: "Sachin",
//             lastname: "Tendulkar",
//             email: "sachin@gmail.com",
//             gender: "male",
//             isMarried: true,
//             country: "2",
//             address: {
//                 city: "Mumbai",
//                 street: "Perry Cross Rd",
//                 pincode: "400050"
//             }
//         };

//         this.reactiveForm.setValue(contact);
//     }

//     setValue() {

//         let contact = {
//             firstname: "Rahul",
//             lastname: "Dravid",
//             email: "rahul@gmail.com",
//             gender: "male",
//             isMarried: true,
//             country: "1",
//             address: {
//                 city: "Bangalore",
//                 street: "Brigade Road",
//                 pincode: "600070"
//             }
//         };

//         this.reactiveForm.setValue(contact);
//     }

//     setAddress() {

//         let address = {
//             city: "Bangalore",
//             street: "Brigade Road",
//             pincode: "600070",
//         };

//         this.reactiveForm.get("address").setValue(address);

//     };

//     setCountry() {

//         this.reactiveForm.get("country").setValue("1");

//     };

//     withOutOnlySelf() {
//         this.reactiveForm.get("firstname").setValue("", { onlySelf: true });
//     }
//     patchAddress() {

//         let address = {
//             city: "Bangalore",
//             street: "Brigade Road",
//             //pincode: "600070",
//             //firstname:'saurv'
//         };

//         this.reactiveForm.get("address").patchValue(address);

//     }

//     patchName() {
//         let contact = {
//             firstname: "Rahul",
//             lastname: "Dravid",
//         }

//         this.reactiveForm.patchValue(contact);

//     }

//     reset() {
//         this.reactiveForm.reset();
//     }

// }

// export class country {
//     id: string;
//     name: string;

//     constructor(id: string, name: string) {
//         this.id = id;
//         this.name = name;
//     }
// }


//with statuschange and event emitter


99
100
101

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { timeout } from 'q';


@Component({
    templateUrl: './reactive.component.html',
})
export class ReactiveComponent implements OnInit {
    title = 'Reactive Forms';

    reactiveForm = new FormGroup({
        firstname: new FormControl('', [Validators.required]),
        lastname: new FormControl(),
        address: new FormGroup({
            city: new FormControl(),
            street: new FormControl(),
            pincode: new FormControl()
        })
    })

    onSubmit() {
        //console.log(this.reactiveForm.value);
    }

    ngOnInit() {

        this.reactiveForm.get("firstname").statusChanges.subscribe(newStatus => {
            console.log('firstname status changed')
            console.log(newStatus)
            console.log(this.reactiveForm.get("firstname").status)
            console.log(this.reactiveForm.status)

            setTimeout(() => {
                console.log(this.reactiveForm.status)
            })

        })

        this.reactiveForm.get("address").statusChanges.subscribe(newStatus => {
            console.log('address status changed')
            console.log(newStatus)
        })

        this.reactiveForm.statusChanges.subscribe(newStatus => {
            console.log('form status changed')
            console.log(newStatus)
        })
    }

    setValue() {

        let contact = {
            firstname: "Rahul",
            lastname: "Dravid",
            address: {
                city: "Bangalore",
                street: "Brigade Road",
                pincode: "600070"
            }
        };

        this.reactiveForm.setValue(contact);
    }

    setAddress() {

        this.reactiveForm.get("address").setValue(
            {
                city: "Bangalore",
                street: "Brigade Road",
                pincode: "600070"
            }
        );
    }

    setFirstname() {
        this.reactiveForm.get("firstname").setValue("Saurav")
    }

    withoutOnlySelf() {
        this.reactiveForm.get("firstname").setValue("");
    }
    withOnlySelf() {
        this.reactiveForm.get("firstname").setValue("", { onlySelf: true });
    }

    withEmitEvent() {
        this.reactiveForm.get("firstname").setValue("Sachin");
    }
    withoutEmitEvent() {
        this.reactiveForm.get("firstname").setValue("", { emitEvent: false });
    }

    reset() {
        this.reactiveForm.reset();
    }

}