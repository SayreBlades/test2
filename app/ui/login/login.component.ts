import {Component} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {alert} from "ui/dialogs";

@Component({
    selector: "login",
    templateUrl: "ui/login/login.component.html"
})
export class LoginPage {
  constructor(private _router: Router){
  }

  signin(){
    this._router.navigate(["Home"]);
  }
}
