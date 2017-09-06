import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders} from "@angular/core";

import { DashboardComponent } from "./dashboard.component";
import { DashboardUsersComponent } from "./users/dashboard-users.component";
import { DashboardUserDetailComponent } from "./users/dashboard-user-detail.component";
import { DashboardUsersHomeComponent } from "./users/dashboard-users-home.component";

const dashboardRoutes:Routes=[
    {
        path:"",
        children:[
            {
                path:"",
                component:DashboardComponent
            },
            {
                path:"users",
                component:DashboardUsersComponent,
                children:[
                    {
                        path:"",
                        component:DashboardUsersHomeComponent
                    },
                    {
                        path:":username",
                        component:DashboardUserDetailComponent
                    }
                ]
            }
        ]
    }
];

export const dashboardRouting:ModuleWithProviders=RouterModule.forChild(dashboardRoutes);