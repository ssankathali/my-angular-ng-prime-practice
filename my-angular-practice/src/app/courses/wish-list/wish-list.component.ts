import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  courses$: Observable<Course[]>;
  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses$ = this.coursesService.getWishlist();
  }

}
