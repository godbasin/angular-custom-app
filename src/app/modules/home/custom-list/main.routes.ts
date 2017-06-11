import { Routes } from '@angular/router';
import { CustomListComponent } from './main.component';

import { ListSettingComponent } from './list-setting/list-setting.component';
import { ListRebuildComponent } from './list-rebuild/list-rebuild.component';

export const CustomListRoutes: Routes = [
    {
        path: '', component: CustomListComponent, children: [
        {path: 'list-setting', component: ListSettingComponent},
        {path: 'list-rebuild', component: ListRebuildComponent},
        {path: '**', redirectTo: 'list-setting'},
        ]
    }
];