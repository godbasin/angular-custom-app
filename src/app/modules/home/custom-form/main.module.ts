import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared/shared.module';

import { CustomFormRoutes } from './main.routes';
import { CustomFormComponent } from './main.component';

import { FormSettingComponent } from './form-setting/form-setting.component';
import { FormRebuildComponent } from './form-rebuild/form-rebuild.component';

@NgModule({
  declarations: [
    CustomFormComponent,
      FormSettingComponent,
    FormRebuildComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(CustomFormRoutes)
  ],
  providers: []
})
export class CustomFormModule { }