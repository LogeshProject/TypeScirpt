function identityOne(val : number ) : number{
    return val ;
}

function identityTwo(val : any ): any {
    return val ;
}

function identityThree<T>(val : T) : T{
    return val ;
}



interface Bottle{
    brand : string ,
    price : number   
}

function identityFour<Bottle>(brand : string ,price : number )  {
    return {brand , price } ;
}

let res = identityThree(4)

console.log(res);

