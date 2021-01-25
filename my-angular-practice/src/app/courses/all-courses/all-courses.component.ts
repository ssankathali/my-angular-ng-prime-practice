import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Course } from '../course';
import { delay, map } from 'rxjs/internal/operators';
import { CoursesService } from '../courses.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  contactForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      pincode: new FormControl()
    })
  })

  constructor(private route: ActivatedRoute, private courseService: CoursesService) { }

  ngOnInit(): void {
    this.courseService.addCourse({ ...this.contactForm.value });
    this.courses$ = of(this.route.snapshot.data['learning']);
  }

}
