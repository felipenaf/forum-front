import { OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/auth/auth.service';
import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
    selector: 'bc-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

    rotaAtual: string = '';

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.router.events
            .subscribe(event => {
                if (event instanceof NavigationStart) {
                    this.rotaAtual = event.url;
                }
            });
    }

    public mostrarNavBar(){
        return !this.rotaAtual.includes('login');
    }

    public logout() {
        this.authService.logout();
    }

}
