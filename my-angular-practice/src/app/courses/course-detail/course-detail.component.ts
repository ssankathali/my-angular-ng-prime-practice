import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Course } from '../course';


@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  courseDetails$: Observable<Course>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.courseDetails$ = of(this.route.snapshot.data['course-detail']);
  }

}
