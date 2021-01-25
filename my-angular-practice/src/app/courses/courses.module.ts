import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { CollectionsComponent } from './collections/collections.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { ArchivedComponent } from './archived/archived.component';
import { CoursesCenterComponent } from './courses-center/courses-center.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CurrencyConverterPipe } from './currency-converter.pipe';

@NgModule({
  declarations: [AllCoursesComponent, CollectionsComponent, WishListComponent, ArchivedComponent, CoursesCenterComponent, CourseCardComponent, CourseDetailComponent, CurrencyConverterPipe],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ButtonModule,
    CardModule
  ]
})
export class CoursesModule { }
