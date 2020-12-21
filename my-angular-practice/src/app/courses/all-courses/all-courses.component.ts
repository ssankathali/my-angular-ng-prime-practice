import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent implements OnInit {
  courses = [
    {
      name: "MacBook",
      description: "My macbook"
    },
    {
      name: "HP",
      description: "My HP"
    },
    {
      name: "HP",
      description: "My HP"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
