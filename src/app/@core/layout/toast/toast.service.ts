import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    toasts: any[] = [];

    private show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
        this.toasts.push({ textOrTpl, ...options });
    }

    public remove(toast) {
        this.toasts = this.toasts.filter(t => t !== toast);
    }

    public success(corpo: string, titulo = null) {
        this.show(corpo, {
            classname: 'bg-success text-light',
            delay: 5000,
            autohide: true,
            headertext: titulo
        });
    }

    public error(corpo: string, titulo = null) {
        this.show(corpo, {
            classname: 'bg-danger text-light',
            delay: 5000,
            autohide: true,
            headertext: titulo
        });
    }
}
