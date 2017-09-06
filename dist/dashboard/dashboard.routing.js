"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard.component");
var dashboard_users_component_1 = require("./users/dashboard-users.component");
var dashboard_user_detail_component_1 = require("./users/dashboard-user-detail.component");
var dashboard_users_home_component_1 = require("./users/dashboard-users-home.component");
var dashboardRoutes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: dashboard_component_1.DashboardComponent
            },
            {
                path: "users",
                component: dashboard_users_component_1.DashboardUsersComponent,
                children: [
                    {
                        path: "",
                        component: dashboard_users_home_component_1.DashboardUsersHomeComponent
                    },
                    {
                        path: ":username",
                        component: dashboard_user_detail_component_1.DashboardUserDetailComponent
                    }
                ]
            }
        ]
    }
];
exports.dashboardRouting = router_1.RouterModule.forChild(dashboardRoutes);
//# sourceMappingURL=dashboard.routing.js.map