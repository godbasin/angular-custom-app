import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppSidebarComponent} from './component/app-sidebar/app-sidebar.component';
import {DynamicFormComponent} from './component/dynamic-form/dynamic-form.component';
// import components
import {
    Select2Component,
    RadioWithTextComponent,
    RadioGroupComponent,
    UploadImageComponent,
    CheckboxGroupComponent,
    CheckboxWithTextComponent,
    DateTimePickerComponent,
    SelectWithInputComponent,
    OnFocusLostDirective // For SelectWithInputComponent
} from 'angular-form-components';

import {JsonToHtmlComponent} from './component/json-to-html.component';
import {DynamicListComponent} from './component/dynamic-list/dynamic-list.component';

import {SafeUrlPipe} from './pipe/safe-url.pipe';


@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule
  ],
  declarations: [
    AppSidebarComponent,
    DateTimePickerComponent,
    DynamicFormComponent,
    RadioGroupComponent,
    CheckboxGroupComponent,
    UploadImageComponent,
    CheckboxWithTextComponent,
    RadioWithTextComponent,
    JsonToHtmlComponent,
    DynamicListComponent,
    Select2Component,
    SelectWithInputComponent,

    OnFocusLostDirective,

    SafeUrlPipe,

  ],
  exports: [
    AppSidebarComponent,
    DateTimePickerComponent,
    DynamicFormComponent,
    RadioGroupComponent,
    CheckboxGroupComponent,
    UploadImageComponent,
    CheckboxWithTextComponent,
    RadioWithTextComponent,
    JsonToHtmlComponent,
    DynamicListComponent,
    Select2Component,
    SelectWithInputComponent,

    OnFocusLostDirective,

    SafeUrlPipe,

  ],
  providers: []
})
export class SharedModule {
}
