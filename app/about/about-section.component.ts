import { Component } from '@angular/core';

@Component({
    
    template: `
        <h1 class="text-center">About Section</h1>
        <router-outlet></router-outlet>
    `    
})

export class AboutSectionComponent  {
    constructor() { }    
}