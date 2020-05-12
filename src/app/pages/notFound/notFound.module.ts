import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotFoundRoutingModule } from './notFound-routing.module';
import { NotFoundComponent } from './index/notFound.component';
// import { AuthService } from 'src/app/@core/auth/auth.service';

@NgModule({
  declarations: [ NotFoundComponent ],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    NgbModule
  ],
  providers: [
    // AuthService
  ]
})
export class NotFoundModule { }
