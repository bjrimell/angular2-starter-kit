// import styles for bundling only on the browser
if (process.env.BROWSER_ENV) {
  require('./../styles/importer.less');
}

import {
  Component,
  ElementRef,
} from 'angular2/core';
import {
  Router,
  RouteConfig,
  ROUTER_DIRECTIVES,
} from 'angular2/router';
import {Home} from './pages/home/home.component';
import {Test} from './pages/test/test.component';
import {Header} from './shared/components/header/header.component';
import {Footer} from './shared/components/footer/footer.component';

@Component({
  selector: 'app',
  directives: [
    ROUTER_DIRECTIVES,
    Header,
    Footer
  ],
  providers: [
  ],
  template: `<header></header><router-outlet></router-outlet><footer></footer>`
})
@RouteConfig([
  // main page
  { path: '/',   name: 'Home', component: Home, useAsDefault: true },
  // test page
  { path: '/test',   name: 'Test', component: Test, useAsDefault: false },
  // default route
  { path: '/**', name: 'Root', redirectTo: ['/Home'] },

])
export class App {

  constructor(router: Router, appElement: ElementRef) {

    // scroll to top of the page after route change
    router.subscribe(() => {
      const bodyElement: HTMLElement = appElement.nativeElement.parentElement;
      if (bodyElement && bodyElement.scrollTop > 0) {
        bodyElement.scrollTop = 0;
      }
    });
  }
}
