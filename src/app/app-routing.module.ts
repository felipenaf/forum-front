import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: 'feijao',
        loadChildren: () => import('./pages/vendas/vendas.module').then(modulo => modulo.VendasModule),
        data: {
            title: 'Vendas'
        }
    },
    {
        path: 'arroz',
        loadChildren: () => import('./pages/arroz/arroz.module').then(modulo => modulo.ArrozModule),
        data: {
            title: 'Arroz'
        }
    },
    {
        path: '**',
        redirectTo: 'login',//criar pag 404
        data: {
            title: 'Página não encontrada'
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
