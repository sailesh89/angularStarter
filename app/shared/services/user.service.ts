import { Injectable } from "@angular/core";
import { User } from "../models/user";

const usersPromise:Promise<User[]>=Promise.resolve([
    {
        id:1,
        name:"Sailesh",
        username:"sailesh89",
        avatar:"https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/13669170_1257526137621496_6348456620279439035_n.jpg?oh=c4568f1d9ffcc8faa0228188f62f2bc3&oe=5A209026"
    },
    {
        id:2,
        name:"Meena",
        username:"meenachockalingam93",
        avatar:"https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-1/p240x240/10300085_538194113010789_8384795079387623418_n.jpg?oh=cf44cb5ac10246ccc5c5d7a9104cef92&oe=5A516C53"
    },
    {
        id:3,
        name:"Thviya",
        username:"thviya.chokkalingam",
        avatar:"https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-1/p240x240/15390867_1021878691250625_8941259558152263534_n.jpg?oh=1a632d4396d25c8188ba51eca68c309b&oe=5A5622C7"
    }
]);



@Injectable()
export class UserService {

    constructor() { }

    //get all users
    getAllUsers(){
        return usersPromise;
    }

    //get user by username
    getUserByUserName(username:string){
        return usersPromise.then(users=>users.find(user=>user.username===username));
    }
}