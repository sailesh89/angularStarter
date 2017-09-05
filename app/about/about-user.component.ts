import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { User } from "../shared/models/user";
import { UserService } from "../shared/services/user.service";

@Component({
    
    template: `
        <button class="btn btn-primary btn-sm" (click)="goBack()">Go Back</button>
        <div class="jumbotron">
            <img [src]="user.avatar" class="img-responsive img-circle" alt="user.name"/>
            <h2>{{user.name}}</h2>
            <p><a href="https://www.facebook.com/{{user.username}}" >{{user.username}}</a></p>
        </div>
        
    `,
    styles:[`
        .jumbotron{
            margin:15px auto;
            text-align:center;
            padding:10px 10px;
            border-radius:10px;
        }

        .jumbotron img{
            max-width:240px;
            margin:15px auto;
        }
    `]
})

export class AboutUserComponent implements OnInit {
    user:User;
    constructor(
        private route:ActivatedRoute,
        private router:Router,
        private userSevice:UserService
    ) { }
    ngOnInit(){
        //let username = this.route.snapshot.params['username'];
        
        //this.userSevice.getUserByUserName(username).then(user=>this.user=user)
        // this.route.data.forEach((data:{user:User})=> this.user=data.user);
       // console.log(username);

        this.route.data.forEach((data:{user:User})=>this.user=data.user)
    }

    goBack(){
        this.router.navigate(['/about'])
    }
   
}