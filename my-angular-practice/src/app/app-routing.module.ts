import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
    {
        path: '', redirectTo: 'home/my-courses/learning', pathMatch: 'full'
    },
    {
        path: 'admin-center',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    },

    {
        path: 'home/my-courses',
        loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
    },
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }