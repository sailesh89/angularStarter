import { UserService } from "../shared/services/user.service";
import { User } from "../shared/models/user";

import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot,Router } from "@angular/router";

@Injectable()
export class AboutUserResolveService implements Resolve<User|boolean>{

    constructor(private service:UserService,private router:Router) { }

    resolve(route:ActivatedRouteSnapshot){
        let username=route.params['username'];
        return this.service.getUserByUserName(username).then(user=>{
            if(user){
                return user;
            }else{
                this.router.navigate(['/about']);
                return false;
            }
        });
    }
}