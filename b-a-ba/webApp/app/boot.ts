import {bootstrap}    from "angular2/platform/browser";
import {AppComponent} from "./app.component";
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouterOutlet} from "angular2/router";

bootstrap(AppComponent, [ROUTER_PROVIDERS]);
