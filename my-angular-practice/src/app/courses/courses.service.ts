import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private coursesUrl = 'api/courses';  // URL to web api
  private collectionsUrl = 'api/collections';  // URL to web api
  private wishlistUrl = 'api/wishlist';  // URL to web api
  private archivedUrl = 'api/archived';  // URL to web api
  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.coursesUrl)
  }

  /** GET heroes from the server */
  getCollections(): Observable<Course[]> {
    return this.http.get<Course[]>(this.collectionsUrl)
  }

  getWishlist(): Observable<Course[]> {
    return this.http.get<Course[]>(this.wishlistUrl)
  }

  getArchived(): Observable<Course[]> {
    return this.http.get<Course[]>(this.archivedUrl)
  }
}
