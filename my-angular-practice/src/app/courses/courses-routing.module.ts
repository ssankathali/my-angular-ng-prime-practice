import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { ArchivedComponent } from './archived/archived.component';
import { CollectionsComponent } from './collections/collections.component';
import { CoursesCenterComponent } from './courses-center/courses-center.component';
import { WishListComponent } from './wish-list/wish-list.component';


const routes: Routes = [
  {
    path: '',
    component: CoursesCenterComponent,
    children: [
      {
        path: 'learning',
        component: AllCoursesComponent
      },
      {
        path: 'collections',
        component: CollectionsComponent
      },
      {
        path: 'wishlist',
        component: WishListComponent
      },
      {
        path: 'archived',
        component: ArchivedComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }