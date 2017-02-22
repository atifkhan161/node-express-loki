import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
           <a routerLink="/class" routerLinkActive="active">Class</a>
       <a routerLink="/emp" routerLinkActive="active">Employee</a>
    </nav>
    <router-outlet></router-outlet>`,
})
export class AppComponent {
    name = 'Route Example';
}
