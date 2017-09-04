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
var usersPromise = Promise.resolve([
    {
        id: 1,
        name: "Sailesh",
        username: "sailesh89",
        avatar: "https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/13669170_1257526137621496_6348456620279439035_n.jpg?oh=c4568f1d9ffcc8faa0228188f62f2bc3&oe=5A209026"
    },
    {
        id: 2,
        name: "Meena",
        username: "meenachockalingam93",
        avatar: "https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-1/p240x240/10300085_538194113010789_8384795079387623418_n.jpg?oh=cf44cb5ac10246ccc5c5d7a9104cef92&oe=5A516C53"
    },
    {
        id: 3,
        name: "Thviya",
        username: "thviya.chokkalingam",
        avatar: "https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-1/p240x240/15390867_1021878691250625_8941259558152263534_n.jpg?oh=1a632d4396d25c8188ba51eca68c309b&oe=5A5622C7"
    }
]);
var UserService = /** @class */ (function () {
    function UserService() {
    }
    //get all users
    UserService.prototype.getAllUsers = function () {
        return usersPromise;
    };
    //get user by username
    UserService.prototype.getUserByUserName = function (username) {
        return usersPromise.then(function (users) { return users.find(function (user) { return user.username === username; }); });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map