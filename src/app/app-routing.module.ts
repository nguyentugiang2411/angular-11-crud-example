import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/index';
import { HomeComponent } from './features/home';
import { LoginComponent } from './features/login';

const usersModule = () => import('./features/users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    // { path: '', loadChildren: homeModule },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'users', loadChildren: usersModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }