import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

import { PageHandbookComponent } from './page-handbook/main.component';
import { CustomListModule } from './custom-list/main.module';
import { CustomFormModule } from './custom-form/main.module';
import { AppSettingComponent } from './custom-app/app-setting.component';

export const HomeRoutes: Routes = [
    {
        path: '', component: HomeComponent, children: [
        {path: 'page-handbook', component: PageHandbookComponent},
        {path: 'custom-list', loadChildren: () => CustomListModule},
        {path: 'custom-form', loadChildren: () => CustomFormModule},
        {path: 'custom-app', component: AppSettingComponent},
        {path: '**', redirectTo: 'custom-app'},
        ]
    }
];