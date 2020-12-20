import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';


const routes: Routes = [
    {
        path: '', redirectTo: 'my-courses/learning', pathMatch: 'full'
    },
    { path: 'my-courses/learning', component: CourseListComponent }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }