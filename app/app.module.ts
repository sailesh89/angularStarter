import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

import { appRouting } from "./app.routing";

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AboutUserComponent } from './about/about-user.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from "./notfound/notfound.component";

import { UserService } from "./shared/services/user.service";

@NgModule({
    imports: [
        BrowserModule,
        appRouting
    ],
    exports: [],
    declarations: [
        AppComponent,
        HomeComponent,ContactComponent,NotFoundComponent,
        AboutComponent,AboutUserComponent
    ],
    providers: [
        UserService
    ],
    bootstrap:[AppComponent]
})
export class AppModule { }
