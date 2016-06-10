"use strict";
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var LoginPage = (function () {
    function LoginPage(_router) {
        this._router = _router;
    }
    LoginPage.prototype.signin = function () {
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