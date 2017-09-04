import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { AboutComponent } from './about/about.component';
import { AboutUserComponent } from './about/about-user.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from "./notfound/notfound.component";


const appRoutes:Routes=[
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"about",
        component:AboutComponent
    },
    {
        path:"about/:username",
        component:AboutUserComponent
    },
    {
        path:"contact",
        component:ContactComponent
    },
    {
        path:"**",
        component:NotFoundComponent
    }
];

export const appRouting :ModuleWithProviders=RouterModule.forRoot(appRoutes);
