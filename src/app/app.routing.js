import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
const appRoutes = [
    { path: 'header', component: HeaderComponent },
    { path: 'about', component: AboutComponent },
    { path: '', component: HomeComponent }
];
export const appRoutingProviders = [];
export const appRouting = RouterModule.forRoot(appRoutes);
