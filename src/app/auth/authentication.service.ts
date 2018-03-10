import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/throw';

import {GlobalState} from '../global.state';
import {BaThemeSpinner} from '../theme/services'

@Injectable()
export class AuthenticationService {

    constructor(private _http: HttpClient, private _spinner: BaThemeSpinner) {

    }
    get(url: string): Observable<any> {
      this._spinner.show();
        return this._http.get(url)
            .map((response: Response) => { 
                this._spinner.hide();
                return <any>response;})
            .catch(this.handleError)
            .finally(()=>
            {
                this._spinner.hide();
            });

    }
    post(url: string,model:any): Observable<any> {
        this._spinner.show();
        return this._http.post(url, model)
            .map((response) => response)
            .catch(this.handleError).finally(()=>
            {
                this._spinner.hide();
            });

    }
    put(url: string,model:any): Observable<any> {
        this._spinner.show();
        return this._http.put(url, model)
            .map((response) => response)
            .catch(this.handleError).finally(()=>
            {
                this._spinner.hide();
            });

    }
    delete(url: string): Observable<any> {
        this._spinner.show();
        return this._http.delete(url)
            .map((response) => response)
            .catch(this.handleError).finally(()=>
            {
                this._spinner.hide();
            });

    }
    deleteWithBody(url: string,model:any): Observable<any> {
        this._spinner.show();
        let req =   new HttpRequest('DELETE', url);
        let newReq = req.clone({body: model});

        return this._http.request(newReq)
            .map((response) => response)
            .catch(this.handleError).finally(()=>
            {
                this._spinner.hide();
            });

    }
    private handleError(error) {
        console.error(error);       
        return Observable.throw(error || 'Server error');
    }
   
}