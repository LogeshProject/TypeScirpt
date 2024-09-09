
let product : number[] = [1,2,3,4]

function getSearchProduct  <T> (product : T[]){
    const i = 3 ;
    return product[i]
}
const getSearchProduct2 = <T> (product : T[]) =>{
    const i = 3 ;
    return product[i]
}

const res1 = getSearchProduct(product)

console.log(res1);
