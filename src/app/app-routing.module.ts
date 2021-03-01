import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './features/home';

const homeModule = () => import('./features/home/home.module').then(x => x.HomeModule);
const usersModule = () => import('./features/users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', loadChildren: homeModule },
    { path: 'users', loadChildren: usersModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }