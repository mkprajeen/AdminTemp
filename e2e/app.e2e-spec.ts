import { AppPage } from './app.po';
import { browser, element, by } from 'protractor'

describe('admin-temp App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    console.log('prajeen kumar')
    console.log(page.getTitle());
    expect(page.getParagraphText()).toEqual('Welcome to app!');
    
  });
});

//using brower 
describe('admin-temp App', () => {
  let page: AppPage;

  beforeEach(() => {
    browser.get('/login')
  });

  it('should present title', () => {
    let hd = by.css('title');
    let headelement = element(hd).isPresent();
    expect(headelement).toBeTruthy();
  });
});
