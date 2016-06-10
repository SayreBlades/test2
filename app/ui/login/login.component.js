"use strict";
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var dialogs_1 = require("ui/dialogs");
var validator = require("email-validator");
var LoginPage = (function () {
    function LoginPage(_router) {
        this._router = _router;
    }
    LoginPage.prototype.signin = function (email) {
        console.info(email);
        if (!validator.validate(email)) {
            dialogs_1.alert("invalid email address");
        }
        this._router.navigate(["Home"]);
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: "login",
            templateUrl: "ui/login/login.component.html"
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=login.component.js.map