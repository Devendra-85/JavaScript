// //var let const (line by line explanation)
//  var a; //declaration
// var a = 12; //declaration and initialization

// //we can dclare the same variable of var type as much time i want i can js error nhi dega
// var a = 13; //re declaration and re initialization
// console.log(a); //13
// //scope of var is global scope and function scope


// //but if we declare the variable with let keyword then we cannot re declare the same variable but we can re initialize the variable
// let b = 12;
// //let b = 13; //SyntaxError: Identifier 'b' has already been declared
// b = 13; //re initialization
// console.log(b); //13
// //let is the function scope and block scope

// //const is also same as let but we cannot re declare and re initialize the variable
// const c = 12;
// //const c = 13; //SyntaxError: Identifier 'c' has already been declared
// //c = 13; //TypeError: Assignment to constant variable.
// console.log(c); //12

// //we can declare the variable with var keyword in global scope and function scope but we cannot declare the variable with let and const keyword in global scope but we can declare the variable with let and const keyword in block scope
// //==================================================================================
// //Temporal dead zone: it is the time period between the hoisting of the variable and its declaration. During this time period, the variable is in a state of "temporal dead zone" and cannot be accessed. If we try to access the variable during this time period, we will get a ReferenceError.

// //Example of temporal dead zone
// console.log(d); //ReferenceError: Cannot access 'd' before initialization
// let d = 12;

// //var do not have any temporal dead zone because var variables are hoisted and initialized with undefined, so we can access them before their declaration without getting a ReferenceError, but we will get undefined as the value.

// console.log(e);
// var e = 14;
// //it will give an undefined value but it will ot show any error because var variables are hoisted and initialized with undefined.
// //==================================================================================

// //hoisting
// //ek variable ko jb js me bnate h to wah do hisson me tut jata h uska declaration wala part upr chla jata h aur initialization wala part wahi rehta h jaha humne usko initialize kiya hota h, is process ko hoisting kehte h. var variables are hoisted and initialized with undefined, let and const variables are hoisted but not initialized, so they are in temporal dead zone until they are declared and initialized.
// //var a=12; //declaration and initialization
// //it will be hoisted as
// var a=undefined; //declaration it is hoisted and initialized with undefined
// a = 12; //initialization

// console.log(a);
// var a = 12;
// //undefined ans

// var x = 1;  //global scope
// {
//     var x = 2;//global scope
// }
// console.log(x); // 2
//=========================================
// let b = 2;//block scope
// {
//     let b = 3; //block scope
//     console.log("Inside:",b); //3
// }
// console.log("Outside:",b); //2

//========================================
// console.log(b);
// let b = 13;
// //ReferenceError: Cannot access 'b' before initialization


//================================================================================


//Data Types+Type System
//agr hm data ki baat kre to data kayi trh k hote h jinko hm do types me bant skte h:-
//Primitive Data Types: aisi asari values jinko copy krne pr ek real copy mil jaye
// ex.=>string, number, boolean, null, undefined, symbol, bigint

// let a = 13;
// let b = a; //copy of a
// console.log(a); //13
// console.log(b); //13

// //now if we change the of b it won't change the value of a because b is a copy of a and it has its own memory location..so b is not a reference to a

// b = 14;
// console.log(a); //13
// console.log(b); //14


//Non-Primitive Data Types: aisi sari values jiko copy krne pr ek real copy n milkr ek reference  mile parent ka
// ex=> object{}, array[], function()

// let obj1 = { name: "John", age: 30 };
// let obj2 = obj1;
// console.log(obj1); //{ name: "John", age: 30 }
// console.log(obj2); //{ name: "John", age: 30 }

// //now if we change the value of obj2 it will change the value of obj1 because obj2 is a reference to obj1 and it has the same memory location as obj1..so obj2 is not a copy of obj1

// obj2.name = "Doe";
// console.log(obj1); //{ name: "Doe", age: 30 }
// console.log(obj2); //{ name: "Doe", age: 30 }

//same thing done with the array

// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// console.log(arr1); //[1, 2, 3]
// console.log(arr2); //[1, 2, 3]

// arr2.push(4);
// console.log(arr1); //[1, 2, 3, 4]
// console.log(arr2); //[1, 2, 3, 4]


