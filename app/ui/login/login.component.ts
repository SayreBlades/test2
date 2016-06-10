import {Component} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {alert} from "ui/dialogs";
var validator = require("email-validator");

@Component({
    selector: "login",
    templateUrl: "ui/login/login.component.html"
})
export class LoginPage {
  constructor(private _router: Router){
  }

  signin(email:string){
    console.info(email);
    if(!validator.validate(email)){
      alert("invalid email address");
    }
    this._router.navigate(["Home"]);
  }
}
