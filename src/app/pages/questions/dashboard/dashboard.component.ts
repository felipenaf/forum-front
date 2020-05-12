import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
@Component({
  selector: 'bc-dashboard-questions',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
    questions: Object

    constructor(
        private httpCliente: HttpClient
    ){ }

    ngOnInit() {
        this.getQuestions();
    }

    openQuestion(param) {
        console.log(param)
    }

    getQuestions() {
        this.httpCliente.get(`${environment.apiRoot}/question`).subscribe(data => {
            data.map(function(e) {
                e.answer = e.answer.length
            })

            console.log(data)

            this.questions = data;
        })

    }

}
