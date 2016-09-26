import { OnInit, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'hpt-header',
    template: '<div></div><router-outlet></router-outlet>'
})
export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}