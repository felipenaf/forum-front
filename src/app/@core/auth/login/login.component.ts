import { StorageService } from './../../utils/storage.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'ap-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

    redirect: string;
    loginForm: FormGroup;
    @ViewChild('inputEmail', { static: true }) inputEmail: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private storageService: StorageService,
        private activatedRoute: ActivatedRoute
    ) {
        this.redirect = environment.paginaInicial;
    }

    ngOnInit(): void {
        this.activatedRoute
            .queryParams
            .subscribe(params => {
                if (params['fromUrl'])
                    this.redirect = params['fromUrl']
            });

        let email = this.storageService.getKey('emailUser');

        this.loginForm = this.formBuilder.group({
            email: [email, [Validators.required, Validators.email]],
            senha: ['Tomates', Validators.required]
        });

        this.storageService.cleanStorage();
        this.inputEmail.nativeElement.focus();
    }

    login(): void {
        const email = this.loginForm.get('email').value;
        const senha = this.loginForm.get('senha').value;
        this.storageService.setKey('emailUser', email);
        this.authService.autenticar(email, senha, this.redirect);
    }

}
