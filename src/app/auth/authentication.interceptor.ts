import { Injectable } from '@angular/core'
import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import {  AuthenticationStore } from './authentication-store'

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    token: string;
    constructor(private authStore:AuthenticationStore)
    { }

    intercept(req: HttpRequest<any>, next: HttpHandler)
    {
        if(this.authStore.token)
        {
            console.log("AuthenticationInterceptor:" + this.authStore.token);
            this.token = this.authStore.token
        }
        //const headers = { 'Authorization': 'Bearer ' +  this.token};
        //const cloneRequest = req.clone({ setHeaders: headers });
        const token =  'Bearer ' +  this.token;
        const cloneRequest = req.clone({ headers: req.headers.set('Authorization', token) });            
        return next.handle(cloneRequest);
    }

}