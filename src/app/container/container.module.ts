import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Router } from '@angular/router';

import { AppRoutes } from './container.routes';
import { AppComponent } from './container.component';
import { LoginComponent } from '../modules/login/login.component';
import { NewAppComponent } from '../modules/app-rebuild/new-app/new-app.component';
import { AppRebuildComponent } from '../modules/app-rebuild/app-rebuild.component';
import { NewAppConfigService } from 'shared/service/new-app-config.service';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes, {useHash: true}),
    SharedModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    NewAppComponent,
      AppRebuildComponent
  ],
  providers: [NewAppConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public router: Router) {
  }
}
