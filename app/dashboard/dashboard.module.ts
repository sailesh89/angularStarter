import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { dashboardRouting } from './dashboard.routing';

import { DashboardUsersComponent } from "./users/dashboard-users.component";
import { DashboardUserDetailComponent } from "./users/dashboard-user-detail.component";
import { DashboardUsersHomeComponent } from "./users/dashboard-users-home.component";


@NgModule({
    imports: [
        CommonModule,
        dashboardRouting
    ],
    exports: [],
    declarations: [
        DashboardComponent,
        DashboardUsersComponent,
        DashboardUsersHomeComponent,
        DashboardUserDetailComponent
    ],
    providers: [],
})
export class DashboardModule { }
