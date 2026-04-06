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
// =========================================
// let b = 2;//block scope
// {
//     let b = 3; //block scope
//     console.log("Inside:",b); //3
// }
// console.log("Outside:",b); //2

// ========================================
// console.log(b);
// let b = 13;
// //ReferenceError: Cannot access 'b' before initialization


// ================================================================================


// Data Types+Type System
// agr hm data ki baat kre to data kayi trh k hote h jinko hm do types me bant skte h:-
// Primitive Data Types: aisi asari values jinko copy krne pr ek real copy mil jaye
// ex.=>string, number, boolean, null, undefined, symbol, bigint

// let a = 13;
// let b = a; //copy of a
// console.log(a); //13
// console.log(b); //13

// //now if we change the of b it won't change the value of a because b is a copy of a and it has its own memory location..so b is not a reference to a

// b = 14;
// console.log(a); //13
// console.log(b); //14


// Non-Primitive Data Types: aisi sari values jiko copy krne pr ek real copy n milkr ek reference  mile parent ka
// ex=> object{}, array[], function()

// let obj1 = { name: "John", age: 30 };
// let obj2 = obj1;
// console.log(obj1); //{ name: "John", age: 30 }
// console.log(obj2); //{ name: "John", age: 30 }

// //now if we change the value of obj2 it will change the value of obj1 because obj2 is a reference to obj1 and it has the same memory location as obj1..so obj2 is not a copy of obj1

// obj2.name = "Doe";
// console.log(obj1); //{ name: "Doe", age: 30 }
// console.log(obj2); //{ name: "Doe", age: 30 }

// same thing done with the array

// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// console.log(arr1); //[1, 2, 3]
// console.log(arr2); //[1, 2, 3]

// arr2.push(4);
// console.log(arr1); //[1, 2, 3, 4]
// console.log(arr2); //[1, 2, 3, 4]

// --------------------------------------------------------------------------------

// String:- it is a sequence of characters enclosed in single quotes, double quotes or backticks. It is a primitive data type in JavaScript.
// let str1 = "Hello";
// let str2 = 'World';
// let str3 = `Hello World`;


//number:- it is a data type that represents numeric values. It is a primitive data type in JavaScript.
// let num1 = 12;
// let num2 = 3.14;


//boolean:- it is a data type that represents two values: true and false. It is a primitive data type in JavaScript.
// let bool1 = true;
// let bool2 = false;


//null:- it is a data type that represents the absence of any value. It is a primitive data type in JavaScript.(hmne janbujhkr koi value nhi di.)
// let nullVar = null;


//undefined:- it is a data type that represents the absence of any value. It is a primitive data type in JavaScript.(hmne variable bnaya lekin usko koi value nhi di. to us case me us variable ki value undefined hoti h.)
// let undefinedVar;

//symbol:- it is a data type that represents a unique identifier. It is a primitive data type in JavaScript.
//(unique immutable value(jo change ni hota) create krta h )
// let sym1 = Symbol("sym1");
// let sym2 = Symbol("sym2");
// console.log(sym1 === sym2); //false because each symbol is unique

// let obj={
//     name:"John",
//     age:30,
//     city:"New York"
// }
// let u1 = Symbol("name")
// obj[u1]="Doe";
// console.log(obj); //{ name: "John", age: 30, city: "New York", [Symbol(name)]: "Doe" }


//bigint:- it is a data type that represents numeric values that are too large to be represented by the number data type. It is a primitive data type in JavaScript.
//(agr hm ek bigint value bna rhe h to us value k last me n lagana hota h ya phir us value ko BigInt() function ke andar pass krna hota h.)
// let bigInt1 = BigInt(123456789012345678901234567890);
// let bigInt2 = 123456789012345678901234567890n; //using n at the end of the number to create a bigint
// Number.MAX_SAFE_INTEGER; //9007199254740991
// let a = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1);
// console.log(a); //9007199254740992n

//------------------------------------------------------------------------------

//reference data types:- it is a data type that represents a reference to an object in memory. It is a non-primitive data type in JavaScript.
// (isme jb hm kisi variable ki value ko kisi dusre variable me assign krte h to us case me dono variable same memory location ko point krte h. isliye agar hm kisi variable ki value ko change krte h to uska effect dusre variable par bhi hota h))

// //in object
// let a= { name: "John", age: 30 };
// let b = a;
// console.log(a); //{ name: "John", age: 30 }
// console.log(b); //{ name: "John", age: 30 }

// b.name = "Doe";
// console.log(a); //{ name: "Doe", age: 30 }
// console.log(b); //{ name: "Doe", age: 30 }

// //in array
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// console.log(arr1); //[1, 2, 3]
// console.log(arr2); //[1, 2, 3]
// arr2.push(4);
// console.log(arr1); //[1, 2, 3, 4]
// console.log(arr2); //[1, 2, 3, 4]





