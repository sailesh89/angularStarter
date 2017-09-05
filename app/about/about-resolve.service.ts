import { UserService } from "../shared/services/user.service";
import { User } from "../shared/models/user";

import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot } from "@angular/router";

@Injectable()
export class AboutResolveService implements Resolve<User[]>{

    constructor(private service:UserService) { }

    resolve(route:ActivatedRouteSnapshot){
        return this.service.getAllUsers().then(users=>users);
    }
}