import { Component, OnInit, Input } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
  type: 'success',
  message: 'Olá Sucesso',
}, {
  type: 'info',
  message: 'This is an info alert',
}, {
  type: 'warning',
  message: 'This is a warning alert',
}, {
  type: 'danger',
  message: 'This is a danger alert',
}, {
  type: 'primary',
  message: 'This is a primary alert',
}, {
  type: 'secondary',
  message: 'This is a secondary alert',
}, {
  type: 'light',
  message: 'This is a light alert',
}, {
  type: 'dark',
  message: 'This is a dark alert',
}
];

@Component({
  selector: 'bc-dashboard-vendas',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor() {
    this.reset();
  }

  ngOnInit() {
    // this.getUsers();
  }

  alerts: Alert[];

  close(alert: Alert) {
    console.log("Teste")

    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

  teste(message) {
    alert(message)
  }

  // getUsers() {
  //   this.authService.getUsers()
  //   .subscribe(
  //     itens => {
  //       console.log('itens', itens);
  //     }
  //   );
  // }

}
