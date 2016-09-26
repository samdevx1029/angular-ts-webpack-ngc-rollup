import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { appRouting, appRoutingProviders } from './app.routing';
import { HeaderComponent } from './shared/header/header.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProtocolsComponent } from './components/protocols/protocols.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        FormsModule,
                        HttpModule,
                        appRouting
                    ],
                    declarations: [
                        AppComponent,
                        HeaderComponent,
                        AboutComponent,
                        HomeComponent,
                        LoginComponent,
                        ProtocolsComponent
                    ],
                    exports: [AppComponent],
                    providers: [
                        appRoutingProviders
                    ],
                    bootstrap: [AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map