var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import '../../public/css/styles.css';
import '../../node_modules/primeng/resources/themes/omega/theme.css';
import '../../node_modules/primeng/resources/primeng.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../src/app/favicon.ico';
export let AppComponent = class AppComponent {
    constructor() {
        this.title = 'My App';
    }
};
AppComponent = __decorate([
    Component({
        moduleId: module.id.toString(),
        selector: 'app-root',
        template: require('./app.component.html'),
        styles: [require('./app.component.css')]
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
