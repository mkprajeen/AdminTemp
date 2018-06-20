import { browser, by, element } from 'protractor';
import { elementAt } from 'rxjs/operators';

export class AppPage {
  navigateTo() {
    return browser.get('/login');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getTitle(){
    return element(by.tagName('title')).getText();
  }

}

