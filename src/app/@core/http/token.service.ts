import { Injectable } from '@angular/core';
import { ParamsService } from '../utils/params.service';
import { Token, TokenModel } from '../model/token-model';
import { Login } from '../model/login-model';
import { DominioFront } from '../model/usuario-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    private tokenModel = new TokenModel();

    constructor(
        private paramsService: ParamsService,
        private httpCliente: HttpClient
    ) { }

    public obterToken(login: Login, dominio: DominioFront): Observable<Token> {
        const data = this.paramsService.cirarUrl(
            this.tokenModel.obterTokenBack(login, dominio),
            ''
        );
        return this.httpCliente.post<Token>(`${environment.apiRoot}/seguranca/token`, data);
    }
}
