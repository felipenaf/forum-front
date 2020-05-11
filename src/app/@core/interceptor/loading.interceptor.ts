import { Injectable } from "@angular/core";
import {
    HttpInterceptor,
    HttpRequest,
    HttpHeaderResponse,
    HttpProgressEvent,
    HttpResponse,
    HttpUserEvent,
    HttpHandler,
    HttpSentEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { LoadingService } from '../layout/loading/loading.service';

@Injectable({ providedIn: 'root' })
export class LoadingInterceptor implements HttpInterceptor {

    constructor(
        private loadingService: LoadingService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpSentEvent |
            HttpHeaderResponse |
            HttpProgressEvent |
            HttpResponse<any> |
            HttpUserEvent<any>> {

        return next
            .handle(req)
            .pipe(tap(event => {
                if (event instanceof HttpResponse) {
                    this.loadingService.stop();
                } else {
                    this.loadingService.start();
                }
            }))
            .pipe(catchError(err => {
                this.loadingService.stop();
                throw err;
            }));
    }
}
