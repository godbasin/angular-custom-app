import { Routes } from '@angular/router';
import { AppComponent } from './container.component';
import { LoginComponent } from '../modules/login/login.component';
import { AppRebuildComponent } from '../modules/app-rebuild/app-rebuild.component';
import { HomeModule } from '../modules/home/home.module';

export const AppRoutes: Routes = [
    {
        path: '', component: AppComponent, children: [
            { path: 'login', component: LoginComponent },
            // for lazyload
            // { path: 'home', loadChildren: '../modules/home/home.module#HomeModule' },
            { path: 'home', loadChildren: () => HomeModule },
            { path: '**', component: AppRebuildComponent },
        ]
    }
];
