﻿import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';

interface State {
    Key: string,
    Value: any
}

//const state = [];
//const store = new BehaviorSubject<Array<State>>(state); 

@Injectable()
export class AuthenticationStore {

    public token: string;
    public LoggedIn: boolean = false;
    public UserDetail: any;
    public SelectedPatient: any;
   // protected token$ = new BehaviorSubject<string>(this.token);

    //private store = new BehaviorSubject<Array<State>>([]);
    //private store$ = this.store.asObservable();

    /**
     *
     */
    constructor() {
      console.log("authentication store ctor");
      if(sessionStorage.getItem("token"))
        {
             this.token = sessionStorage.getItem("token");
        }
      if(sessionStorage.getItem("LoggedIn") =="true")
       {
         this.LoggedIn = true;
       }
      if(sessionStorage.getItem("UserDetail"))
      {
        this.UserDetail= JSON.parse(sessionStorage.getItem("UserDetail"));    
      }

    }

    // setToken(token: string): any {
    //     this.token = token;
    //     this.token$.next(token);
    // }
    // getToken(): Observable<string> {
    //     return Observable.of(this.token);
    // }

    // getState(key: string): Observable<any>
    // {
    //     let retval = this.store
    //     return Observable.of(this.store.value);
    // }
}
