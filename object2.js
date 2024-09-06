function createUser(user) {
    return { _id: "1234", name: "Logesh", };
}
var myUser = {
    _id: "1234",
    name: "Logesh"
};
myUser.creditCard = true;
myUser.name = "Logu";
// myUser._id = "1453"   //  id we cant change beacuse it was read - only 
console.log(myUser);
