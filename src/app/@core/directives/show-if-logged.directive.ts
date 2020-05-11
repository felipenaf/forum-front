import { AuthService } from './../auth/auth.service';
import { Directive, Renderer, OnInit } from "@angular/core";
import { ElementRef } from "@angular/core";

@Directive({
    selector: '[showIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

    currentDisplay: string;

    constructor(
        private element: ElementRef<any>,
        private renderer: Renderer,
        private authService: AuthService
    ) { }

    ngOnInit(): void {

        this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
        if (this.authService.isLogged()) {
            this.renderer.setElementStyle(this.element.nativeElement, 'display', this.currentDisplay);
        } else {
            this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
            this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
        }

    }
}
