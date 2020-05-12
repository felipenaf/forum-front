import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
@Component({
    selector: 'bc-question-questions',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.less']
})
export class QuestionComponent implements OnInit {

    constructor(
        private httpCliente: HttpClient,
        private router: Router
    ){ }

    ngOnInit() {

        // this.router.params.subscribe( parametros => {
        //     if (parametros['id']) {
        //       // faça algo aqui
        //     }
        //   });

        // const rr = this.router.routerState.root.queryParams
        const rr = this.router.routerState.root.queryParams
        console.log(rr)

        // const par = this.router.snapshot.paramMap.get('id');
        // console.log(par);

        // this.getQuestions();
    }

}
