import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app/app-view.html'
    // template: `
    // <md-card>
    // Hello {{name}}
    //   <md-toolbar>
    //
    //   </md-toolbar>
    //   <router-outlet></router-outlet>
    // </md-card>`,
})
export class AppComponent {
    name = 'Route Example';
}
