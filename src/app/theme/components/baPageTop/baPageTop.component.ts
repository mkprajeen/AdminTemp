import {Component} from '@angular/core';
import { Router } from '@angular/router';

import {GlobalState} from '../../../global.state';
import { AuthenticationStore } from '../../../auth';

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss']
})
export class BaPageTop {

  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;
  logedInUser: string;
  userPhoto: string;
  photo: string;

  constructor(private _state:GlobalState, 
             private store:AuthenticationStore, private router: Router) {
    
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
    this._state.subscribe('logged.user', (user) => {
      this.logedInUser = user.FirstName + user.MiddleName + user.LastName;
      this.userPhoto = "data:image/JPEG;base64," + user.PhotoImage;
    });
   
    if(this.store.UserDetail!= null && this.store.UserDetail.PhotoImage != null)
       this.userPhoto = "data:image/JPEG;base64," + this.store.UserDetail.PhotoImage;    
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
  public onSignOut()
  {
    sessionStorage.setItem("token",null);
    sessionStorage.setItem("LoggedIn",null);
    sessionStorage.setItem("UserDetail",null);
    this.store.UserDetail = null;
    this.store.LoggedIn = null;
    this.store.token = null;    
    this.router.navigate(['pages/login']);
  }
}
