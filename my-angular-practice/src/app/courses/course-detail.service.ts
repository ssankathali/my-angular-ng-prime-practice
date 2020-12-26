import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from './course';
import { CoursesService } from './courses.service';
@Injectable({
  providedIn: 'root'
})
export class CourseDetailService implements Resolve<any> {

  constructor(private _router: Router, private coursesService: CoursesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let id = parseInt(route.paramMap.get('id'));
    console.log(id);
    return this.coursesService.getCourse(id);
  }
}
