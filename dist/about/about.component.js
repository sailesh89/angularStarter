"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../shared/services/user.service");
var AboutComponent = /** @class */ (function () {
    function AboutComponent(userService) {
        this.userService = userService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAllUsers().then(function (users) { return _this.users = users; });
    };
    AboutComponent = __decorate([
        core_1.Component({
            template: "\n        <h3>This is About Page</h3>\n        <div class=\"row\">\n            <div class=\"col-sm-4\" *ngFor=\"let user of users\">\n                <div class=\"profile-card\" [routerLink]=\"['/about',user.username]\">\n                    <img [src]=\"user.avatar\" class=\"img-responsive img-circle\" alt=\"user.name\"/>\n                    <h2>{{user.name}}</h2>\n                    <p><a href=\"https://www.facebook.com/{{user.username}}\" >{{user.username}}</a></p>\n                </div>\n            </div>           \n        </div>\n    ",
            styles: ["\n        .profile-card{\n            background-color:#F3F3F3;\n            text-align:center;\n            border-radius:10px;\n            margin:15px auto;\n            padding:10px 10px;\n\n        }\n        .profile-card img{\n            margin:15px auto;\n            max-width:240px;    \n        }\n    "]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map