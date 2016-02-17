import {bind, Component, View} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";
import {RouteConfig, RouteParams, ROUTER_DIRECTIVES, APP_BASE_HREF, ROUTER_BINDINGS} from 'angular2/router';

@Component({
  selector: 'sup-cmp'
})
@View({
  template: `
    <div>
      <h2>Hello {{message}}!</h2>
    </div>
  `
})
class SupCmp {
  constructor(params: RouteParams) {
    /*
    this.message = params.get('name');
    */
  }
}

@Component({
  selector: 'home-cmp'
})
@View({
  template: `
    <div>
      <h2>Welcome Home</h2>
    </div>
  `
})
class HomeCmp {}


@Component({
  selector: 'my-app'
})
@View({
  template: `
    <div>
      <h1>Hello {{message}}!</h1>
      <a [router-link]="['./HomeCmp']">home</a>
      <a [router-link]="['./HelloCmp', {name: 'brian'}]">hello</a>
      <hr>
      <router-outlet></router-outlet>
    </div>
  `,
  directives: ROUTER_DIRECTIVES
})
@RouteConfig([
  {path: '/', component: HomeCmp, as: 'HomeCmp'},
  {path: '/hello/:name', component: SupCmp, as: 'HelloCmp'}
])
export class App {
  message:string = 'world';
}

bootstrap(App, [
  ROUTER_BINDINGS,
  bind(APP_BASE_HREF).toValue(location.pathname)
]);



/*
import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouterOutlet} from "angular2/router";
import {bootstrap} from "angular2/platform/browser";

import {AboutUs} from './aboutUs';
import {MenuComponent} from './menu.component';

@Component({
    selector: 'my-app',
    template:`
		    <my-menu></my-menu>
        <router-outlet></router-outlet>
		`,

	styles:[],
    directives: [ROUTER_DIRECTIVES]


})

@RouteConfig([
  { path: '/', component: MenuComponent, name: 'menuComponent' },
  { path: '/aboutUs', component: AboutUs, name: 'aboutUs' }
])

export class AppComponent {

}

bootstrap(AppComponent, [ROUTER_PROVIDERS]);
*/
