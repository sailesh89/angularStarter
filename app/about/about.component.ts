import { Component, OnInit } from '@angular/core';
import { User } from "../shared/models/user";
import { UserService } from "../shared/services/user.service";
import { Router,ActivatedRoute } from '@angular/router';


@Component({
    template: `
        <h3>This is About Page</h3>
        <div class="row">
            <div class="col-sm-4" *ngFor="let user of users">
                <div class="profile-card" [routerLink]="['/about',user.username]">
                    <img [src]="user.avatar" class="img-responsive img-circle" alt="user.name"/>
                    <h2>{{user.name}}</h2>
                    <p><a href="https://www.facebook.com/{{user.username}}" >{{user.username}}</a></p>
                </div>
            </div>           
        </div>
    `,
    styles:[`
        .profile-card{
            background-color:#F3F3F3;
            text-align:center;
            border-radius:10px;
            margin:15px auto;
            padding:10px 10px;
            cursor:pointer;

        }
        .profile-card img{
            margin:15px auto;
            max-width:240px;    
        }
    `]
})

export class AboutComponent implements OnInit {
    users:User[];
    constructor(private userService:UserService, private route:ActivatedRoute) { }     
    ngOnInit(){
       // this.userService.getAllUsers().then(users=>this.users=users);

        this.route.data.forEach((data:{users:User[]})=>this.users=data.users)
    }
}