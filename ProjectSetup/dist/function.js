"use strict";


function sumOfThree(one, two, three) {
    let result = 0;
    if (typeof one === 'number' && typeof two === 'number' && typeof three === 'number') {
        result = one + two + three;
    }
    return result;
}
console.log(sumOfThree(4, 56, 8));
