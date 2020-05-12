import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
@Component({
    selector: 'bc-question-questions',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.less']
})
export class QuestionComponent implements OnInit {
    question: any

    constructor(
        private httpCliente: HttpClient,
        private router: Router
    ){ }

    ngOnInit() {
        const url = this.router.routerState.snapshot.url
        this.getQuestion(url)
    }

    getQuestion(url) {
        this.httpCliente.get(`${environment.apiRoot}/${url}`).subscribe(data => {
            this.question = data
        })

    }

}
