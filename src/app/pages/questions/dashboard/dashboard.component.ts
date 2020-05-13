import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    returnPost: any
    error: string
    questionForm: FormGroup
    urlQuestion = `${environment.apiRoot}/question`

    constructor(
        private httpCliente: HttpClient,
        private formBuilder: FormBuilder,
        private router: Router
    ){ }

    ngOnInit() {
        this.getQuestions();

        this.questionForm = this.formBuilder.group({
            user: [""],
            content: [""]
        });

    }

    openQuestion(param) {
        this.router.navigate([`question/${param}`])
    }

    getQuestions() {
        this.questions = []

        this.httpCliente.get(this.urlQuestion)
        .subscribe(data => {
            this.questions = data

            this.questions.map(function(e) {
                e.answer = e.answer.length
            })

        },
        error =>{
            if (error.status == 404) {
                this.error = "O forum não possui nenhuma pergunta ainda"
            }

        })

    }

    postQuestion() {
        const user = this.questionForm.get('user').value;
        const content = this.questionForm.get('content').value;

        const body = JSON.parse(
            `{
                "content": "${content}",
                "user": "${user}"
            }`
        );

        if (user.length == 0 || content.length == 0) {
            alert("Preencha seu nome e a resposta")
            return false
        }

        this.httpCliente.post(this.urlQuestion, body)
        .subscribe((data) => {
            this.returnPost = data

            this.questions.unshift({id: this.returnPost.id, content, user, answer: 0})
            this.questionForm.get('user').setValue("")
            this.questionForm.get('content').setValue("")
        })

    }

}
