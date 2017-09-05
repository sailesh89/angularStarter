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
var router_1 = require("@angular/router");
var user_service_1 = require("../shared/services/user.service");
var AboutUserComponent = /** @class */ (function () {
    function AboutUserComponent(route, router, userSevice) {
        this.route = route;
        this.router = router;
        this.userSevice = userSevice;
    }
    AboutUserComponent.prototype.ngOnInit = function () {
        //let username = this.route.snapshot.params['username'];
        var _this = this;
        //this.userSevice.getUserByUserName(username).then(user=>this.user=user)
        // this.route.data.forEach((data:{user:User})=> this.user=data.user);
        // console.log(username);
        this.route.data.forEach(function (data) { return _this.user = data.user; });
    };
    AboutUserComponent.prototype.goBack = function () {
        this.router.navigate(['/about']);
    };
    AboutUserComponent = __decorate([
        core_1.Component({
            template: "\n        <button class=\"btn btn-primary btn-sm\" (click)=\"goBack()\">Go Back</button>\n        <div class=\"jumbotron\">\n            <img [src]=\"user.avatar\" class=\"img-responsive img-circle\" alt=\"user.name\"/>\n            <h2>{{user.name}}</h2>\n            <p><a href=\"https://www.facebook.com/{{user.username}}\" >{{user.username}}</a></p>\n        </div>\n        \n    ",
            styles: ["\n        .jumbotron{\n            margin:15px auto;\n            text-align:center;\n            padding:10px 10px;\n            border-radius:10px;\n        }\n\n        .jumbotron img{\n            max-width:240px;\n            margin:15px auto;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            user_service_1.UserService])
    ], AboutUserComponent);
    return AboutUserComponent;
}());
exports.AboutUserComponent = AboutUserComponent;
//# sourceMappingURL=about-user.component.js.map