import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoggingService {

    logError(message: string, stack: string) {
        // To Do -> implementar slack e serviço no backend pra salvar as notificações
        console.log(`LoggingService: ${message} - stack: ${stack}`);
    }
}
