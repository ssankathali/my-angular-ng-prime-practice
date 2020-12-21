import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { CollectionsComponent } from './collections/collections.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { ArchivedComponent } from './archived/archived.component';
import { CoursesCenterComponent } from './courses-center/courses-center.component';

import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AllCoursesComponent, CollectionsComponent, WishListComponent, ArchivedComponent, CoursesCenterComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ButtonModule
  ]
})
export class CoursesModule { }
