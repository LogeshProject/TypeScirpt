function reverseWord(s){

    let str = s.split(" ")

    let reverse = "";

    for(let i= str.length-1 ; i>= 0 ;i--){
        reverse =  reverse + str[i] + " " ;
    }

   console.log(reverse);
   
}

let str = "This word is reverse"

reverseWord(str)


