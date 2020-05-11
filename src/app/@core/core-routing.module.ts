import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LoginGuard } from './auth/login/login.guard';

const routes: Routes = [
    {
        path: 'login',
        canActivate: [LoginGuard],
        component: LoginComponent,
        data: {
            title: 'Login '
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
