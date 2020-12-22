import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-archived',
  templateUrl: './archived.component.html',
  styleUrls: ['./archived.component.scss']
})
export class ArchivedComponent implements OnInit {
  courses$: Observable<Course[]>;
  constructor(private coursesService: CoursesService) { }


  ngOnInit(): void {
    this.courses$ = this.coursesService.getArchived();
  }

}
