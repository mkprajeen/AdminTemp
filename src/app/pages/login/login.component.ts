import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Global } from '../../global';
import { GlobalState } from '../../global.state';
import { AuthenticationService, AuthenticationStore } from '../../auth';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  errorMessage: string;
  ifError:boolean=false;

  constructor(fb: FormBuilder,
    private router: Router,
    private authServ: AuthenticationService,
    private authStore: AuthenticationStore,
    private state: GlobalState) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    this.ifError=false;
    if (this.form.valid) {
      // your code goes here    

      this.authServ.Login(Global.BASE_API_ENDPOINT + 'TokenAuthentication/Token', { email: this.email.value, password: this.password.value })
        .subscribe(token => {
          if (token.access_token != null) {
            this.authStore.token = token.access_token;
            this.authStore.LoggedIn = true;
            sessionStorage.setItem("token",token.access_token);
            sessionStorage.setItem("LoggedIn","true");

            var appUserId = token.AppUser.ApplicationUserId
            //TODO: get user details and user profile info
            this.authServ.get(Global.BASE_API_ENDPOINT + 'users/GetUserByApplicationUserId?Id=' + appUserId)
              .subscribe(user => {
                this.state.notifyDataChanged("logged.user", user);
                this.authStore.UserDetail = user ;
                sessionStorage.setItem("UserDetail",JSON.stringify(user));
                
              },
              error => {
                this.errorMessage = error;
                console.log(this.errorMessage);
              });

            this.router.navigate(['/dashboard']);
          }
        },
        error => 
        {
          this.ifError=true;
          console.log(error);
          this.errorMessage = error.error;
        });
    }

    console.log(values);
  }
}
