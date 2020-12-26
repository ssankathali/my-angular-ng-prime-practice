import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Course } from '../course';
import { delay, map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.courses$ = of(this.route.snapshot.data['learning']);
  }

}
