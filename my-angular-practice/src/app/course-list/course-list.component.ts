import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  products = [
    {
      name: "MacBook",
      description: "My macbook"
    },
    {
      name: "HP",
      description: "My HP"
    },
    {
      name: "HP",
      description: "My HP"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

// class products {
//   name: string;
//   description: string;
// }