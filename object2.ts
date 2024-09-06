type UserDetails = {
    readonly _id : string ; // we cant change that
    name : string ;
    creditCard ?: boolean ; // optional
}

function createUser2(user : UserDetails) : UserDetails {

    return { _id : "1234",name : "Logesh" , }
}

let myUser : UserDetails = {

    _id : "1234",
    name : "Logesh"
}

myUser.creditCard = true ;
myUser.name = "Logu";
// myUser._id = "1453"   //  id we cant change beacuse it was read - only 

console.log(myUser);


// create multiple typr and combine them : 

type cardNumber = {
    cardNo : string ;
}

type cardDate = {
    cardDate : string ;
}

type cardDetails = cardNumber & cardDate & {
    cardCVV :number ;
    cardBalance ?: number ;
}

function createCard(card : cardDetails): cardDetails {
    return {cardNo : "1234" , cardDate : "12-02-23" , cardCVV : 345 }
}