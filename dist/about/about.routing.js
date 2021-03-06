"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var about_section_component_1 = require("./about-section.component");
var about_component_1 = require("./about.component");
var about_user_component_1 = require("./about-user.component");
var about_resolve_service_1 = require("./about-resolve.service");
var about_user_resolve_service_1 = require("./about-user-resolve.service");
var aboutRoutes = [
    {
        path: "",
        component: about_section_component_1.AboutSectionComponent,
        children: [
            {
                path: "",
                component: about_component_1.AboutComponent,
                resolve: {
                    users: about_resolve_service_1.AboutResolveService
                }
            },
            {
                path: ":username",
                component: about_user_component_1.AboutUserComponent,
                resolve: {
                    user: about_user_resolve_service_1.AboutUserResolveService
                }
            }
        ]
    }
    // {
    //     path:"about",
    //     component:AboutComponent
    // },
    // {
    //     path:"about/:username",
    //     component:AboutUserComponent
    // }
];
exports.aboutRouting = router_1.RouterModule.forChild(aboutRoutes);
//# sourceMappingURL=about.routing.js.map