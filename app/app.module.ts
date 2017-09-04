import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

import { appRouting } from "./app.routing";

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
@NgModule({
    imports: [
        BrowserModule,
        appRouting
    ],
    exports: [],
    declarations: [
        AppComponent,
        HomeComponent,AboutComponent,ContactComponent
    ],
    providers: [],
    bootstrap:[AppComponent]
})
export class AppModule { }
