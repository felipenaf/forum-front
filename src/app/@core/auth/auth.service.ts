import { Injectable } from '@angular/core';
import { UsuarioService } from '../http/usuario.service';
import { TokenService } from '../http/token.service';
import { StorageService } from '../utils/storage.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private usuarioService: UsuarioService,
        private tokenService: TokenService,
        private storageService: StorageService,
        private router: Router
    ) { }

    private setToken(token: string): void {
        this.storageService.setKey('token', token);
    }

    public getToken(): string {
        return this.storageService.getKey('token');
    }

    public isLogged(): boolean {
        let token = this.getToken();
        return !!token;
    }

    public autenticar(email: string, senha: string, redirect?: string) {
        this.usuarioService.obterDominios( email )
            .subscribe( dominio =>
                this.tokenService.obterToken( { email, senha }, dominio )
                    .subscribe(
                        token => {
                            this.setToken(token.access_token);
                            this.usuarioService.obterUsuarioLogado();
                            if (redirect)
                                this.router.navigate([redirect])
                        }
                    )
            )
    }

    public logout(){
        this.storageService.cleanStorage();
        this.router.navigate(['login']);
    }
}
