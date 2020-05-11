import { Login } from './login-model';
import { DominioFront } from './usuario-model';

export interface Token {
    access_token: string,
    expires_in: number,
    token_type: string
}

export class TokenModel {

    public obterTokenBack(login: Login, dominio: DominioFront) {
        return {
            username: login.email,
            password: login.senha,
            idcliente: dominio.id,
            grant_type: 'password',
        }
    }
}
