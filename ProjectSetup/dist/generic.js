"use strict";
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(brand, price) {
    return { brand, price };
}
let res = identityThree(4);
console.log(res);
