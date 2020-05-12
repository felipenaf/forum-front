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
  selector: 'bc-dashboard-questions',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
    questions: any

    constructor(
        private httpCliente: HttpClient,
        private router: Router
    ){ }

    ngOnInit() {
        this.getQuestions();
    }

    openQuestion(param) {
        this.router.navigate([`question/${param}`])
        // console.log(param)
    }

    getQuestions() {
        this.httpCliente.get(`${environment.apiRoot}/question`).subscribe(data => {
            this.questions = data

            this.questions.map(function(e) {
                e.answer = e.answer.length
                console.log(e)
            })

            console.log(this.questions)
        })

    }

}
