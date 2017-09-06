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
        //component:AboutComponent
        loadChildren:"app/about/about.module#AboutModule"
    },   
    {
        path:"contact",
        component:ContactComponent
    },
    {
        path:"dashboard",
        loadChildren:"app/dashboard/dashboard.module#DashboardModule"
    },
    {
        path:"**",
        component:NotFoundComponent
    }
];

export const appRouting :ModuleWithProviders=RouterModule.forRoot(appRoutes);
