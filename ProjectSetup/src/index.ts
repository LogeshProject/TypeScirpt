// class User{

//     public email : string 
//     private name : string
//     readonly city : string = "Thogaimalai"
//     constructor(email : string, name : string ){
//         this.email = email ;
//         this.name = name ;
//         this.city = "" ;
//     }
// }

class User{

    
    
    readonly city : string = "Thogaimalai"
    constructor(
        public email : string,
        public name : string ,
        private userId : number ,
    )
    {
        
    }


    get getUserId(): number {
        return this.userId ;
    }

    set setUserId(Id :number){
        this.userId = Id  ;
    }
}
const Logesh = new User( "logu@gmail.com","Logesh18" , 1234);

console.log(Logesh.getUserId);

var value : number = 1235 ;

Logesh.setUserId= value ;

console.log(Logesh.getUserId);