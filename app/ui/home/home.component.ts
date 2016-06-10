import {Component} from "@angular/core";
import {Location} from "@angular/common";
import {alert} from "ui/dialogs";

@Component({
    selector: "login",
    templateUrl: "ui/home/home.component.html"
})
export class HomePage {
  constructor(private _location:Location){}

  onNavBtnTap(){
    this._location.back();
  }

}
