import {Component, OnInit} from '@angular/core'

@Component({
    templateUrl : './app/modules/class/class-view.html',
    selector: 'class-view'
})

export class ClassComponent implements OnInit {
    obj = "Show some class";
    obj2 = "To Use";

    ngOnInit() : void {
    }
}