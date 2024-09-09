"use strict";
// class User{
//     public email : string 
//     private name : string
//     readonly city : string = "Thogaimalai"
//     constructor(email : string, name : string ){
//         this.email = email ;
//         this.name = name ;
//         this.city = "" ;
//     }
// }
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "Thogaimalai";
    }
    get getUserId() {
        return this.userId;
    }
    set setUserId(Id) {
        this.userId = Id;
    }
}
const Logesh = new User("logu@gmail.com", "Logesh18", 1234);
console.log(Logesh.getUserId);
var value = 1235;
Logesh.setUserId = value;
console.log(Logesh.getUserId);
