import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-center',
  templateUrl: './admin-center.component.html',
  styleUrls: ['./admin-center.component.scss']
})
export class AdminCenterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onAddProduct() {
    this.router.navigate(['/admin-center/add-course']);
  }
}
