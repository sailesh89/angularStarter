import { Route,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { AboutComponent } from "./about.component";
import { AboutUserComponent } from "./about-user.component";


const aboutRoutes:Route[]=[
    {
        path:"about",
        children:[
            {
                path:"",
                component:AboutComponent
            },
            {
                path:":username",
                component:AboutUserComponent
            }
        ]
    }
];

export const aboutRouting: ModuleWithProviders=RouterModule.forChild(aboutRoutes);