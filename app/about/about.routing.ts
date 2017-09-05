import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { AboutSectionComponent } from "./about-section.component";
import { AboutComponent } from "./about.component";
import { AboutUserComponent } from "./about-user.component";
import { AboutResolveService } from "./about-resolve.service";
import { AboutUserResolveService } from "./about-user-resolve.service";


const aboutRoutes:Routes=[
    {
        path:"",
        component:AboutSectionComponent,
        children:[
            {
                path:"",
                component:AboutComponent,
                resolve:{
                    users:AboutResolveService
                }
            },
            {
                path:":username",
                component:AboutUserComponent,
                resolve:{
                    user:AboutUserResolveService
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

export const aboutRouting: ModuleWithProviders=RouterModule.forChild(aboutRoutes);