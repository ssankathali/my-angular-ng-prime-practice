import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Course } from '../course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent implements OnInit {
  courses = [
  ];
  subscription: Subscription;
  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.subscription = this.coursesService.getCourses().subscribe((res: Course[]) => {
      this.courses = res;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
