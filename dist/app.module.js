"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
//import { AboutModule } from "./about/about.module";
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
// import { AboutComponent } from './about/about.component';
// import { AboutUserComponent } from './about/about-user.component';
var home_component_1 = require("./home/home.component");
var contact_component_1 = require("./contact/contact.component");
var notfound_component_1 = require("./notfound/notfound.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.appRouting
            ],
            exports: [],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent, contact_component_1.ContactComponent, notfound_component_1.NotFoundComponent
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map