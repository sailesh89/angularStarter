import { Component, OnInit } from '@angular/core';

@Component({
    
    template: `
        I am dashboard Component
    `
})

export class DashboardComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log("Daashboard Component Active");
     }
}