import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { ArchivedComponent } from './archived/archived.component';
import { CollectionsComponent } from './collections/collections.component';
import { WishListComponent } from './wish-list/wish-list.component';


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