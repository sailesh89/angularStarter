import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AboutSectionComponent } from './about-section.component';
import { AboutComponent } from './about.component';
import { AboutUserComponent } from './about-user.component';

import { aboutRouting } from "./about.routing";

import { UserService } from "../shared/services/user.service";
import { AboutResolveService } from "./about-resolve.service";
import { AboutUserResolveService } from "./about-user-resolve.service";
@NgModule({
    imports: [
        CommonModule,
        aboutRouting
    ],
    exports: [],
    declarations: [
        AboutComponent,
        AboutUserComponent,
        AboutSectionComponent
    ],
    providers: [
        UserService,
        AboutResolveService,
        AboutUserResolveService
    ],
})
export class AboutModule { }
