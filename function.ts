
// number

function addTwo(num : number) : number{
    return num + 2 ;
}



console.log(addTwo(4));




// string 

function toUpper2(str : string): string{
    return str.toUpperCase();
}

// set default parameter value 

function signup(name : string , email : string , isPaid : boolean= false){
   
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

export{}