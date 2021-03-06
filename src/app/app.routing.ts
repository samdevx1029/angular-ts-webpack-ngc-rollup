import { ModuleWithProviders  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './shared/header/header.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ProtocolsComponent } from './components/protocols/protocols.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'protocols', component: ProtocolsComponent },
  { path: '', component: HomeComponent }
];

export const appRoutingProviders: any[] = [

];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);