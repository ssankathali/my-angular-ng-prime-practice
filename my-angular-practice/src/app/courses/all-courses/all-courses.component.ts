import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Course } from '../course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses$ = this.coursesService.getCourses();
  }

}
