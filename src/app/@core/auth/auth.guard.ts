import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router) {}

    canActivate(
        activatedRouteSnapshot: ActivatedRouteSnapshot,
        routerStateSnapshot: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

            if(!this.authService.isLogged()){
                this.router.navigate(
                    ['login'],
                    {
                        queryParams: {
                            fromUrl: routerStateSnapshot.url
                        }
                    }
                );
                return false;
            }
            return true;
    }
}
