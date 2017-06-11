import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppSidebarComponent} from './component/app-sidebar/app-sidebar.component';
import {DynamicFormComponent} from './component/dynamic-form/dynamic-form.component';
import {DateTimePickerComponent} from './component/date-time-picker.component';
import {Select2Component} from './component/select2.component';
import {RadioGroupComponent} from './component/radio-group.component';
import {CheckboxGroupComponent} from './component/checkbox-group.component';
import {UploadImageComponent} from './component/upload-image/upload-image.component';
import {CheckboxWithTextComponent} from './component/checkbox-with-input.component';
import {RadioWithTextComponent} from './component/radio-with-input.component';
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
    Select2Component,
    DynamicFormComponent,
    RadioGroupComponent,
    CheckboxGroupComponent,
    UploadImageComponent,
    CheckboxWithTextComponent,
    RadioWithTextComponent,
    JsonToHtmlComponent,
    DynamicListComponent,

    SafeUrlPipe,

  ],
  exports: [
    AppSidebarComponent,
    DateTimePickerComponent,
    Select2Component,
    DynamicFormComponent,
    RadioGroupComponent,
    CheckboxGroupComponent,
    UploadImageComponent,
    CheckboxWithTextComponent,
    RadioWithTextComponent,
    JsonToHtmlComponent,
    DynamicListComponent,

    SafeUrlPipe,

  ],
  providers: []
})
export class SharedModule {
}
