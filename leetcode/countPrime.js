function isPrime(n){

    let count = 0 ;

    for(let i=2;i <= n/2 ; i++){
        if(n%i === 0){
            count++ ;
        }
    }

    if(count === 0) return true ;
    else return false ;
}

let num = 10

function countPrime(num){

    let count = 0
    
for(let i=2;i<num ; i++){

  
    if(isPrime(i)){
        count++ ;

        console.log(i , ": ", count);
        
    }
}

console.log(count) ;
}

countPrime(num)