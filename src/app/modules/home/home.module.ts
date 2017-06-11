import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared/shared.module';

import { HomeRoutes } from './home.routes';
import { HomeComponent } from './home.component';

import { PageHandbookComponent } from './page-handbook/main.component';
import { AppSettingComponent } from './custom-app/app-setting.component';


@NgModule({
  declarations: [
    HomeComponent,
    PageHandbookComponent,
    AppSettingComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(HomeRoutes)
  ],
  providers: []
})
export class HomeModule { }