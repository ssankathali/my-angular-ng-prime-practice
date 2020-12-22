import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Course } from './courses/course';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const courses = [
      { id: 11, name: 'Dr Nice', description: 'dsfasd' },
      { id: 12, name: 'Narco', description: 'dsfasd' },
      { id: 13, name: 'Bombasto', description: 'dsfasd' }
    ];
    return { courses };
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

