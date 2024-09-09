

function sumOfThree<T>(one:T,two:T,three:T):T{
    let result: number = 0
    if(typeof one === 'number' && typeof two === 'number' && typeof three === 'number'){
             result = one + two + three 
    }
    return result as T
}
console.log(sumOfThree(4, 56,8));