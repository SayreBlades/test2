import {Component} from "@angular/core";
import {RouteConfig} from "@angular/router-deprecated";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {LoginPage} from "./login/login.component";
import {HomePage} from "./home/home.component";

@Component({
  selector: "main",
  directives: [NS_ROUTER_DIRECTIVES],
  providers: [NS_ROUTER_PROVIDERS],
  template: "<page-router-outlet></page-router-outlet>",
	stylesUrl: "./app.css"
})
@RouteConfig([
  { path: "/login", component: LoginPage, name: "Login", useAsDefault: true },
  { path: "/home", component: HomePage, name: "Home" }
])
export class AppComponent {}
