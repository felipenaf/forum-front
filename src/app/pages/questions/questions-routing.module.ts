import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionComponent } from './question/question.component';
// import { AuthGuard } from 'src/app/@core/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        // canActivate: [AuthGuard],
        component: DashboardComponent,
        data: {
            title: 'Dashboard'
        }
    },
    {
        path: '/question',
        // canActivate: [AuthGuard],
        component: QuestionComponent,
        data: {
            title: 'Question'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuestionsRoutingModule { }
