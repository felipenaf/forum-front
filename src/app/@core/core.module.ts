import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CoreRoutingModule } from './core-routing.module';

import { LoginComponent } from './auth/login/login.component';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { LoadingInterceptor } from './interceptor/loading.interceptor';
import { NotifyInterceptor } from './interceptor/notify.interceptor';
import { ServerErrorInterceptor } from './interceptor/server-error.interceptor';
import { HeaderComponent } from './layout/header/header.component';
import { ToastComponent } from './layout/toast/toast.component';
import { LoadingComponent } from './layout/loading/loading.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ShowIfLoggedDirective } from './directives/show-if-logged.directive';
import { GlobalErrorHandler } from './interceptor/global-error.handler';


@NgModule({
    declarations: [
        LoginComponent,
        HeaderComponent,
        ToastComponent,
        LoadingComponent,
        ShowIfLoggedDirective,
    ],
    imports: [
        CommonModule,
        CoreRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgbModule
    ],
    exports: [
        HeaderComponent,
        LoadingComponent,
        ToastComponent,
        ShowIfLoggedDirective,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotifyInterceptor,
            multi: true
        },
        {
            provide: ErrorHandler,
            useClass: GlobalErrorHandler
        }

    ]
})

export class CoreModule { }
