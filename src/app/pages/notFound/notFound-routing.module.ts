import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './index/notFound.component';
// import { AuthGuard } from 'src/app/@core/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        // canActivate: [AuthGuard],
        component: NotFoundComponent,
        data: {
            title: 'Not Found'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotFoundRoutingModule { }
