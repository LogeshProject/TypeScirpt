
let user = {
    name : "Logesh",
    age : 22 ,
    isPaid : true 
}

function createUser({ name : string , age : number , isPaid : boolean}){
    
}



// return object 

function createCourse():{name: string , price : number}{
    return {name : "react.js" , price : 399}
}

let newUser = {
    name : "Logesh",
    age : 22 ,
    isPaid : true,
    email : "logesh@gmail.com" // additional information
}

createUser(user)
createUser(newUser)



// create new type - type Aliases 


type User = {
    name : string;
    email : string ;
    isActive : boolean
}

function createNewUser(user : User): User {
    return { name : "Logesh", email: "logesh182@gmail.com" , isActive : true}
}

export{}