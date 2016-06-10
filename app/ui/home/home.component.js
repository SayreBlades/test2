"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var HomePage = (function () {
    function HomePage(_location) {
        this._location = _location;
    }
    HomePage.prototype.onNavBtnTap = function () {
        this._location.back();
    };
    HomePage = __decorate([
        core_1.Component({
            selector: "login",
            templateUrl: "ui/home/home.component.html"
        }), 
        __metadata('design:paramtypes', [common_1.Location])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=home.component.js.map