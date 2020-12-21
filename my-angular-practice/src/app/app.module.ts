import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { from } from 'rxjs';
import { CourseListComponent } from './course-list/course-list.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { CollectionsComponent } from './collections/collections.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { ArchivedComponent } from './archived/archived.component';
import { AdminCenterComponent } from './admin-center/admin-center.component';
@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    AllCoursesComponent,
    CollectionsComponent,
    WishListComponent,
    ArchivedComponent,
    AdminCenterComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    AppRoutingModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
