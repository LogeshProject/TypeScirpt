var score : number | string ;

score = 55 ;
score = "Fifty five"


type userSide = {
    id : number ;
    name : string ;
}

type adminSide = {
    id : number ;
    AdminName : string ;
}

// Logesh would both user and admin 

let Logesh : userSide | adminSide = {

    name : "logesh18" , id : 1234
}

Logesh = { AdminName : "LogeshAdmin18" , id : 4567}



// choose the particular type 

function getId( id : number | string) {

    if( typeof id ===  "string"){
        id.toLowerCase()
    }
}




// array union 

const arr : number[] = [ 1, 2, 3 ]
const arr2 : string[] = [ "1", "2", "3" ]
const arr3 : (string | number )[] = [ "1", "2", "3" , 3 , 5 ]   // - paranthesis 



var basicSeatAllotment : "Upper" | "midder" | "lower" ;

basicSeatAllotment = "Upper";
// basicSeatAllotment = "AC";   // not allowed 


// Tuples 

var tData: [string , number , boolean]

tData = ["1234" , 23 , true ] ;

tData.push(true)
