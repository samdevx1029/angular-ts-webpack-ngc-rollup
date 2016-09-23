import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    selector: 'hpt-protocols',
    template: require('./protocols.component.html')
})
export class ProtocolsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}