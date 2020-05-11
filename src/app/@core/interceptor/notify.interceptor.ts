import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ToastService } from './../layout/toast/toast.service';

@Injectable()
export class NotifyInterceptor implements HttpInterceptor {

    constructor(private toastService: ToastService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse && event.status === 201) {
                    this.toastService.success("Object created.");
                }
            })
        );;
    }
}
