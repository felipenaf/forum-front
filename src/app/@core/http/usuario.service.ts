import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DominioFront, DominioBack, UsuarioModel } from '../model/usuario-model';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    private usuarioModel = new UsuarioModel();

    constructor(
        private httpCliente: HttpClient
    ) { }

    public obterUsuarioLogado() {
        return 'método sem implementação';
    }

    public obterDominios(email: string): Observable<DominioFront> {
        return this.httpCliente
            .get(`${environment.apiRoot}/Usuario/ObterDominios?login=${email}`)
            .pipe(map((data: DominioBack[]) => this.usuarioModel.obterDominio(data)));
    }

}

