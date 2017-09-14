import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { NgaModule } from './theme/nga.module';

import { GlobalState } from './global.state';


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
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule.forRoot(),
    routing,
    PagesModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
