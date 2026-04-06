//var let const (line by line explanation)
 var a; //declaration
var a = 12; //declaration and initialization
//we can dclare the same variable of var type as much time i want i can js error nhi dega
var a = 13; //re declaration and re initialization
console.log(a); //13

//but if we declare the variable with let keyword then we cannot re declare the same variable but we can re initialize the variable
let b = 12;
//let b = 13; //SyntaxError: Identifier 'b' has already been declared
b = 13; //re initialization
console.log(b); //13