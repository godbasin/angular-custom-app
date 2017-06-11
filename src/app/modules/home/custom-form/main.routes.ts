import { Routes } from '@angular/router';
import { CustomFormComponent } from './main.component';

import { FormSettingComponent } from './form-setting/form-setting.component';
import { FormRebuildComponent } from './form-rebuild/form-rebuild.component';

export const CustomFormRoutes: Routes = [
    {
        path: '', component: CustomFormComponent, children: [
        {path: 'form-setting', component: FormSettingComponent},
        {path: 'form-rebuild', component: FormRebuildComponent},
        {path: '**', redirectTo: 'form-setting'}, // For simulation app.
        ]
    }
];