import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { VendasRoutingModule } from './vendas-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from 'src/app/@core/auth/auth.service';



@NgModule({
  declarations: [ DashboardComponent ],
  imports: [
    CommonModule,
    VendasRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    AuthService
  ]
})
export class VendasModule { }
