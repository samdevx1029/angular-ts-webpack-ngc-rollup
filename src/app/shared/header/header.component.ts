import { OnInit, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'hpt-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit {
    title = 'PLATE TRACKER';
    constructor() { }

    ngOnInit() { 
    }
}