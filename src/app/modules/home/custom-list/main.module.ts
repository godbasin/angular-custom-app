import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared/shared.module';

import { CustomListRoutes } from './main.routes';
import { CustomListComponent } from './main.component';

import { ListSettingComponent } from './list-setting/list-setting.component';
import { ListRebuildComponent } from './list-rebuild/list-rebuild.component';

@NgModule({
  declarations: [
    CustomListComponent,
    ListSettingComponent,
      ListRebuildComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(CustomListRoutes)
  ],
  providers: []
})
export class CustomListModule { }