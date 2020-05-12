import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/questions/questions.module').then(modulo => modulo.QuestionsModule),
        data: {
            title: 'Question'
        }
    },
    {
        path: '**',
        loadChildren: () => import('./pages/notFound/notFound.module').then(modulo => modulo.NotFoundModule),
        data: {
            title: 'Not Found'
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
