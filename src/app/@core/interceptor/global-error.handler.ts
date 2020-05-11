import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ToastService } from './../layout/toast/toast.service';
import { LoggingService } from './../services/logging.service';
import { ErrorService } from './../services/error.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(
        private errorService: ErrorService,
        private loggingService: LoggingService,
        public toastService: ToastService,
    ) { }

    handleError(error: Error | HttpErrorResponse) {

        let message;
        let stackTrace;

        if (error instanceof HttpErrorResponse) {
            // Erros na API
            message = this.errorService.getServerMessage(error);
            stackTrace = this.errorService.getServerStack(error);
            this.toastService.error(message);
        } else {
            // Erros no navegador
            message = this.errorService.getClientMessage(error);
            stackTrace = this.errorService.getClientStack(error);
            this.toastService.error(message);
        }

        // Sempre loga os error
        this.loggingService.logError(message, stackTrace);

        //  To Do -> implementar notificações de erro no slack, igual zabbix
        console.error(error);

    }
}
