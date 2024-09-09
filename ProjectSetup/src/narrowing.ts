
function detectType(val : (number | string )){
    if(typeof val === 'string'){
        return val.toLowerCase()
    }else{
        return val + 4 ;
    }


}

function printAll(str : (string | string[] | null)){

    if(str){

        if(typeof str === "object"){
            for(const i in str){
                console.log(str[i]);
                
            }
        }
    }else if(typeof str === 'string'){
        console.log(str);
        
    }
}


let str = ['a', 'b' , 'c', 'd' , 'e']

let res2 = printAll(str);


// in narrowing 

interface profile {
    name : string ,
    email : string
}

interface Admin{
    name : string , 
    email : string ,
    isAdmin : boolean 
}

function isAdminAccount( account : (Admin | profile )){

    if('isAdmin' in account){
        return account.isAdmin ;
    }
}

