import { Component } from '@angular/core';

@Component({
    
    template: `
        <h3>The path that you have tried to access is not found. Please follow the breadcrumbs to go to home page.</h3>
        <p><a href="/" class="btn btn-primary btn-sm">Go Back</a></p>
    `
})

export class NotFoundComponent  {
    constructor() { }

  
}