import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Course } from './courses/course';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const courses = [
      { id: 11, name: 'Dr Nice', description: 'dsfasd', price: 50 },
      { id: 12, name: 'Narco', description: 'dsfasd', price: 50 },
      { id: 13, name: 'Bombasto', description: 'dsfasd', price: 50 }
    ];
    const collections = [
      { id: 11, name: 'Dr Nice Collection', description: 'dsfasd', price: 50 },
      { id: 12, name: 'Narco Collection', description: 'dsfasd', price: 50 },
      { id: 13, name: 'Bombasto Collection', description: 'dsfasd', price: 50 }
    ];

    const wishlist = [
      { id: 11, name: 'Dr Nice Wishlist', description: 'dsfasd', price: 50 },
      { id: 12, name: 'Narco Wishlist', description: 'dsfasd', price: 50 },
      { id: 13, name: 'Bombasto Wishlist', description: 'dsfasd', price: 50 }
    ];

    const archived = [
      { id: 11, name: 'Dr Nice Archived', description: 'dsfasd', price: 50 },
      { id: 12, name: 'Narco Archived', description: 'dsfasd', price: 50 },
      { id: 13, name: 'Bombasto Archived', description: 'dsfasd', price: 50 }
    ];
    return { courses, collections, wishlist, archived };
  }
  // Overrides the genId method to ensure that a course always has an id.
  // If the courses array is empty,
  // the method below returns the initial number (11).
  // if the courses array is not empty, the method below returns the highest
  // hero id + 1.
  genId(courses: Course[]): number {
    return courses.length > 0 ? Math.max(...courses.map(course => course.id)) + 1 : 11;
  }

}

