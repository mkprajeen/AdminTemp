import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { TranslateService } from '@ngx-translate/core';
import { routing } from './app.routing';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { ThemeModule } from './theme/theme.module';

import { GlobalState } from './global.state';
import {AuthenticationInterceptor,AuthenticationStore,AuthenticationGuard,AuthenticationService,} from './auth'



// Application wide providers
const APP_PROVIDERS = [
 // AppState,
  GlobalState
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule.forRoot(),
    routing,
    PagesModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS,AuthenticationStore,AuthenticationGuard,AuthenticationService,
    [{
      provide: HTTP_INTERCEPTORS, useClass:
      AuthenticationInterceptor, multi: true
    }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
