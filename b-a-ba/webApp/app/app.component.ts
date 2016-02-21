import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";

import {AboutUs} from "./aboutUs";
import {MenuComponent} from "./menu.component";
import {HomeComponent} from "./home.component";
import {ArticleComponent} from "./article.component";
import {EvenementComponent} from "./evenement.component";

@Component({
    selector: 'my-app',
    templateUrl: "./app/page/item/main.html",
  directives: [ROUTER_DIRECTIVES, MenuComponent]
})
@RouteConfig([
  /*{ // Crisis Center child route
    path: '/',
    name: 'root',
    component: HomeComponent,
    useAsDefault: true
  },*/
  { path: '/', component: HomeComponent, name: 'Home' },
  { path: '/evenement', component: EvenementComponent, name: 'Evenement' },
  { path: '/blog', component: ArticleComponent, name: 'Blog' },
  { path: '/aboutUs', component: AboutUs, name: 'AboutUs' }
])
export class AppComponent {

}
