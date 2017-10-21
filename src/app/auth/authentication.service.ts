import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
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
            .catch(this.handleError);

    }
    post(url: string,model:any): Observable<any> {
        return this._http.post(url, model)
            .map((response) => response)
            .catch(this.handleError);

    }
    private handleError(error) {
        console.error(error);
        this._spinner.hide();
        return Observable.throw(error || 'Server error');
    }
   
}