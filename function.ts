
// number

function addTwo2(num : number) : number{
    return num + 2 ;
}

var res  = addTwo(4);

console.log(res);




// string 

function toUpper2(str : string): string{
    return str.toUpperCase();
}

// set default parameter value 

function signup2(name : string , email : string , isPaid : boolean= false){
   
}

signup("Logesh","logu@gmail.COM", false);

signup("Logesh","logu@gmail.COM")


// Arrow function - return type 


var getHello = () :string =>  {
    return "" ;
}


// In array 

var heros = [ "Thor" , "Spider-man" , "Iron-man"] ;

var character = [1,2,3] ;

character.map( hero =>{
    return `Hero name is ${hero}`;
})


// void function 

function error(msg : string): void{
    console.log(msg);
    
}

// never 

function fail(msg : string ) : never{
    throw new Error(msg) ;
}

let user = {
    name : "Logesh",
    age : 22 ,
    isPaid : true 
}

function createUser({ name : string , age : number , isPaid : boolean}){}

let newUser = {
    name : "Logesh",
    age : 22 ,
    isPaid : true,
    email : "logesh@gmail.com" // additional information
}

createUser(user)
createUser(newUser)