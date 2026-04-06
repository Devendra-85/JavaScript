//var let const (line by line explanation)
 var a; //declaration
var a = 12; //declaration and initialization

//we can dclare the same variable of var type as much time i want i can js error nhi dega
var a = 13; //re declaration and re initialization
console.log(a); //13
//scope of var is global scope and function scope


//but if we declare the variable with let keyword then we cannot re declare the same variable but we can re initialize the variable
let b = 12;
//let b = 13; //SyntaxError: Identifier 'b' has already been declared
b = 13; //re initialization
console.log(b); //13
//let is the function scope and block scope

//const is also same as let but we cannot re declare and re initialize the variable
const c = 12;
//const c = 13; //SyntaxError: Identifier 'c' has already been declared
//c = 13; //TypeError: Assignment to constant variable.
console.log(c); //12

//we can declare the variable with var keyword in global scope and function scope but we cannot declare the variable with let and const keyword in global scope but we can declare the variable with let and const keyword in block scope
==================================================================================
//Temporal dead zone: it is the time period between the hoisting of the variable and its declaration. During this time period, the variable is in a state of "temporal dead zone" and cannot be accessed. If we try to access the variable during this time period, we will get a ReferenceError.

//Example of temporal dead zone
console.log(d); //ReferenceError: Cannot access 'd' before initialization
let d = 12;