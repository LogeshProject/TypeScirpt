// number
function addTwo(num) {
    return num + 2;
}
var res = addTwo(4);
console.log(res);
// string 
function toUpper(str) {
    return str.toUpperCase();
}
// set default parameter value 
function signup(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
var res2 = signup("Logesh", "logu@gmail.COM", false);
signup("Logesh", "logu@gmail.COM");
// Arrow function - return type 
var getHello = function () {
    return "";
};
// In array 
var heros = ["Thor", "Spider-man", "Iron-man"];
heros.map(function (hero) {
    return "Hero name is ".concat(hero);
});
