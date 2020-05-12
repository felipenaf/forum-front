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
  selector: 'bc-question-questions',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.less']
})
export class QuestionComponent implements OnInit {
    // question: Object

    constructor(
        private httpCliente: HttpClient
    ){ }

    ngOnInit() {
        // this.getQuestions();
    }

}
