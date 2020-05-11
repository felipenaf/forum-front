import { Component, TemplateRef } from '@angular/core';
import { ToastService } from './toast.service';


@Component({
    selector: 'bc-toasts',
    templateUrl: './toast.component.html',
    host: { '[class.ngb-toasts]': 'true' }
})
export class ToastComponent {
    constructor(public toastService: ToastService) {
        console.log('toastService');
    }

    isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }
}
