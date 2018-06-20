import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TranslateService } from '@ngx-translate/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routing } from './app.routing';
import { PagesModule } from './pages/pages.module';

import { ThemeModule } from './theme/theme.module';


import { GlobalState } from './global.state';
import { AuthenticationInterceptor, AuthenticationStore, AuthenticationGuard, AuthenticationService, } from './auth'

import { APP_BASE_HREF } from '@angular/common';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserModule,
        HttpClientModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatTabsModule,
        ThemeModule.forRoot(),
        routing,
        PagesModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [ // expose our Services and Providers into Angular's dependency injection
        GlobalState, AuthenticationStore, AuthenticationGuard, AuthenticationService,
        [{
          provide: HTTP_INTERCEPTORS, useClass:
            AuthenticationInterceptor, multi: true
        }],
        [{provide: APP_BASE_HREF , useValue : '/' }]
      ],

    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'AdminTemp'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    console.log( 'prajeen kuamr');
    console.log( app.title);
    expect(app.title).toEqual('AdminTemp');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
