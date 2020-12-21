import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCenterComponent } from './admin-center/admin-center.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';


const routes: Routes = [{
  path: '',
  component: AdminCenterComponent,
  children: [{
    path: 'add-course',
    component: AddCourseComponent
  },
  {
    path: 'settings',
    component: AdminSettingsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
