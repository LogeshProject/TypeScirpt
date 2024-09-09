"use strict";
let product = [1, 2, 3, 4];
function getSearchProduct(product) {
    const i = 3;
    return product[i];
}
const getSearchProduct2 = (product) => {
    const i = 3;
    return product[i];
};
const res1 = getSearchProduct(product);
console.log(res1);
