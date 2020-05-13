import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { QuestionsRoutingModule } from './questions-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionComponent } from './question/question.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AuthService } from 'src/app/@core/auth/auth.service';

@NgModule({
  declarations: [ DashboardComponent, QuestionComponent ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // AuthService
  ]
})
export class QuestionsModule { }
