import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    animations: [
        trigger('routerTransition', [
          transition('* <=> *', [
            style({ opacity: 0 }),
            animate('1s', style({ opacity: 1 })),
          ]),
        ]),
      ],
})
export class LayoutComponent implements OnInit {
    collapedSideBar!: boolean;

    constructor() {}

    ngOnInit() {}

    receiveCollapsed($event: boolean) {
        this.collapedSideBar = $event;
    }
}
