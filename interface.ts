interface UserDoc {                     // interface allows you to put a method inside 

    readonly _id : number ,
    name : string ,
    email : string ,
    googleId ?: string ,
    // startTrail(): string ,
    startTrail:() => string ,
    getCoupon():number 
}

// re-opening of an interface 

interface UserDoc {
    gitToken ?: number 
}


interface Admin extends UserDoc {
    role : "Admin" | "User" | "host"
}

const LogeshC : Admin = {

    _id : 123 ,
    name : "Logesh18" ,
    email : "logesh@gmail.com",
    startTrail:() =>{
        return ""
    },
    getCoupon() {
        return 2
    },
    role : "Admin"
}