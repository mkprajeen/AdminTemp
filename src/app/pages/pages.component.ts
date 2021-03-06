import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';

@Component({
  selector: 'pages',
  template: `
   <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-right" translate>{{'general.created_with'}} <i class="fa fa-heart"></i></div>
      <div class="al-footer-main clearfix">
        <div class="al-copy">&copy; <a href="https://www.linkedin.com/in/prajeenkumar/" translate>{{'general.copyright_info'}}</a> 2017</div>
        <ul class="al-share clearfix">
          <li><i class="fa fa-facebook"></i></li>
          <li><i class="fa fa-twitter"></i></li>
          <li><i class="fa fa-google"></i></li>
          <li><i class="fa fa-github"></i></li>
        </ul>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {

  constructor(private _menuService: BaMenuService,) {
  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }
}
