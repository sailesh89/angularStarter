import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AboutComponent } from './about.component';
import { AboutUserComponent } from './about-user.component';

import { UserService } from "../shared/services/user.service";

@NgModule({
    imports: [CommonModule],
    exports: [],
    declarations: [
        AboutComponent,
        AboutUserComponent
    ],
    providers: [
        UserService
    ],
})
export class AboutModule { }
