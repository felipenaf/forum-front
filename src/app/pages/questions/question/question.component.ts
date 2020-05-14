import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    question: any
    answerForm: FormGroup
    url = this.router.routerState.snapshot.url

    constructor(
        private httpCliente: HttpClient,
        private formBuilder: FormBuilder,
        private router: Router
    ){ }

    ngOnInit() {
        this.question = []
        this.getQuestion(this.url)

        var id_question = this.url.split("/")[2]

        this.answerForm = this.formBuilder.group({
            user: [""],
            content: [""],
            question: [`${id_question}`]
        });

    }

    postAnswer() {
        const user = this.answerForm.get('user').value;
        const content = this.answerForm.get('content').value;
        const id_question = this.answerForm.get('question').value;

        const body = JSON.parse(
            `{
                "content": "${content}",
                "user": "${user}",
                "question": {
                    "id": ${id_question}
                }
            }`
        );

        if (user.length == 0 || content.length == 0) {
            alert("Preencha seu nome e a resposta")
            return false
        }

        this.httpCliente.post(`${environment.apiRoot}/answer`, body)
        .subscribe(() => {
            this.question.answer.unshift({content, user})
            this.answerForm.get('user').setValue("")
            this.answerForm.get('content').setValue("")
        })

    }

    getQuestion(url) {
        this.httpCliente.get(`${environment.apiRoot}/${url}`).subscribe(data => {
            this.question = data
        },
        error => {
            this.router.navigate(['notFound'])
        })

    }

    redirectQuestions() {
        this.router.navigate([''])
    }

}
