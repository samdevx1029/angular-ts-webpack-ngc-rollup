import { Component } from '@angular/core';
export var AppComponent = (function () {
    function AppComponent() {
        this.title = 'My App';
    }
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-root',
                    template: '<hpt-header></hpt-header><h1>{{title}}</h1>',
                    styleUrls: ['./app.component.css']
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = [];
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map