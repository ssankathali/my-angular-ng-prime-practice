import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CoursesService } from './courses.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllCoursesService implements Resolve<any> {

  constructor(private _router: Router, private coursesService: CoursesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.coursesService.getCourses();
  }
}
