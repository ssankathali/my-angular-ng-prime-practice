import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  courses$: Observable<Course[]>;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses$ = this.coursesService.getCollections();
  }

}
