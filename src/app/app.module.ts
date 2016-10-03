import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
//import { MdMenuModule } from '@angular2-material/menu';

import {} from 'reflect-metadata';

import { AppComponent }   from './app.component';
import { appRouting, appRoutingProviders } from './app.routing';

import { HeaderComponent } from './shared/header/header.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProtocolsComponent } from './components/protocols/protocols.component';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        //MdMenuModule.forRoot(),
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
})
export class AppModule {}