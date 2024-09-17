
let str = 'a1'

let nums = Array.from(str)

console.log(nums);

let n = Number(str[1]);

console.log(typeof(n));


if(nums[0] == 'a' || nums[0] == 'c' || nums[0] == 'e' || nums[0] == 'g' ){

    if(n%2===0){
        value = "white" ;
    }else{
        value = "black" ;
    }

}
if(nums[0] == 'a' || nums[0] == 'c' || nums[0] == 'e' || nums[0] == 'g' ){
    if(n%2 ===1){
        value2 = "white"
    }else{
        value2 = "black"
    }
}


