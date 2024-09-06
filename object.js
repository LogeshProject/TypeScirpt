var user = {
    name: "Logesh",
    age: 22,
    isPaid: true
};
function createUser(_a) {
    var string = _a.name, number = _a.age, boolean = _a.isPaid;
}
// return object 
function createCourse() {
    return { name: "react.js", price: 399 };
}
var newUser = {
    name: "Logesh",
    age: 22,
    isPaid: true,
    email: "logesh@gmail.com" // additional information
};
createUser(user);
createUser(newUser);
function createNewUser(user) {
    return { name: "Logesh", email: "logesh182@gmail.com", isActive: true };
}
