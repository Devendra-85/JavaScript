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
// //=========================================
// let b = 2;//block scope
// {
//     let b = 3; //block scope
//     console.log("Inside:",b); //3
// }
// console.log("Outside:",b); //2

// //========================================
// console.log(b);
// let b = 13;
// //ReferenceError: Cannot access 'b' before initialization


// //================================================================================


// // Data Types+Type System
// // agr hm data ki baat kre to data kayi trh k hote h jinko hm do types me bant skte h:-
// // Primitive Data Types: aisi asari values jinko copy krne pr ek real copy mil jaye
// // ex.=>string, number, boolean, null, undefined, symbol, bigint

// let a = 13;
// let b = a; //copy of a
// console.log(a); //13
// console.log(b); //13

// //now if we change the of b it won't change the value of a because b is a copy of a and it has its own memory location..so b is not a reference to a

// b = 14;
// console.log(a); //13
// console.log(b); //14


// // Non-Primitive Data Types: aisi sari values jiko copy krne pr ek real copy n milkr ek reference  mile parent ka
// // ex=> object{}, array[], function()

// let obj1 = { name: "John", age: 30 };
// let obj2 = obj1;
// console.log(obj1); //{ name: "John", age: 30 }
// console.log(obj2); //{ name: "John", age: 30 }

// //now if we change the value of obj2 it will change the value of obj1 because obj2 is a reference to obj1 and it has the same memory location as obj1..so obj2 is not a copy of obj1

// obj2.name = "Doe";
// console.log(obj1); //{ name: "Doe", age: 30 }
// console.log(obj2); //{ name: "Doe", age: 30 }

// // same thing done with the array

// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// console.log(arr1); //[1, 2, 3]
// console.log(arr2); //[1, 2, 3]

// arr2.push(4);
// console.log(arr1); //[1, 2, 3, 4]
// console.log(arr2); //[1, 2, 3, 4]

// --------------------------------------------------------------------------------

// // String:- it is a sequence of characters enclosed in single quotes, double quotes or backticks. It is a primitive data type in JavaScript.
// let str1 = "Hello";
// let str2 = 'World';
// let str3 = `Hello World`;


// // Number:- it is a data type that represents numeric values. It is a primitive data type in JavaScript.
// let num1 = 12;
// let num2 = 3.14;


// // boolean:- it is a data type that represents two values: true and false. It is a primitive data type in JavaScript.
// let bool1 = true;
// let bool2 = false;


// // null:- it is a data type that represents the absence of any value. It is a primitive data type in JavaScript.(hmne janbujhkr koi value nhi di.)
// let nullVar = null;


// // undefined:- it is a data type that represents the absence of any value. It is a primitive data type in JavaScript.(hmne variable bnaya lekin usko koi value nhi di. to us case me us variable ki value undefined hoti h.)
// let undefinedVar;

// // symbol:- it is a data type that represents a unique identifier. It is a primitive data type in JavaScript.
// // (unique immutable value(jo change ni hota) create krta h )
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


// // bigint:- it is a data type that represents numeric values that are too large to be represented by the number data type. It is a primitive data type in JavaScript.
// // (agr hm ek bigint value bna rhe h to us value k last me n lagana hota h ya phir us value ko BigInt() function ke andar pass krna hota h.)
// let bigInt1 = BigInt(123456789012345678901234567890);
// let bigInt2 = 123456789012345678901234567890n; //using n at the end of the number to create a bigint
// Number.MAX_SAFE_INTEGER; //9007199254740991
// let a = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1);
// console.log(a); //9007199254740992n

// //----------------------------------------------------------------------------

// // Reference data types:- it is a data type that represents a reference to an object in memory. It is a non-primitive data type in JavaScript.
// // (isme jb hm kisi variable ki value ko kisi dusre variable me assign krte h to us case me dono variable same memory location ko point krte h. isliye agar hm kisi variable ki value ko change krte h to uska effect dusre variable par bhi hota h))

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


// //============================================================================

// //Dynamic typing: - js me static typing nhi h to hm ek variable me kisi bhi type ki value assign kr skte h aur us variable ki type change kr skte h.isliye js ko dynamic typing language kehte h.
// //int a = 12; //baki kay sari languages me hm variable kodeclare krte h usk sath me uska data type bhi declare krte h.

// let a = 12; //number
// console.log(a); //12
// a = "Hello";
// console.log(a); //Hello
// a = true;
// console.log(a); //true

// //typeof quirks:-
// typeof null // object,
// typeof array // object,
// typeof function //function,
// typeof NaN //number,
// typeof NaN //number is not a number but it is a special value of number data type,
// typeof NaN===NaN // false because NaN is not equal to anything including itself

// //=============================================================================

// //Type Coercion:- yeh ek aisa concept h jisme aapka ek type ka value kisi dusre type me convert ho jata h automatically.

// let a = "12";
// let b = 3;
// console.log(a + b); //123 because of string concatenation
// console.log(a - b); //9 because of type coercion
// console.log(a * b); //36 because of type coercion
// console.log(a / b); //4 because of type coercion

// //Truthy and falsy values:-
// //Truthy values: aisi values jinko boolean me convert krne par true milta h
// //Falsy values: aisi values jinko boolean me convert krne par false milta h
// //Falsy values in JavaScript: false, 0, -0, 0n, "", null, undefined, NaN, document.all

// // note:
// // 1. why NaN is treated as a number:
// //   NaN:- javascript me ek failed number operation ki trh treat krta h isliye    uska type number hota h. jaise ki agar aap kisi string ko number me convert krne ki koshish karte h to aapko NaN milega aur uska type number hoga. isliye NaN is treated as a number in JavaScript.
        
// //   2. Undefined and null: -
// //        undefined value tb aati h jb hm koi variable bnate h lekin use koi value assign nhi krte h.
            
// //         null vlaue tb aati h jb hm janbujhkr kisi variable me koi null value assign krte h.

// // ===============================================================================

// // operators:- operators are special symbols that perform operations on operands. There are different types of operators in JavaScript:

// // 1. Arithmetic operators: +(addition and concatenation), -, *, **(exponentiation 2**3=8), /, %, ++, --,%

// // 2. Assignment operators: =, +=, -=, *=, /=, %=, **=

// // 3. Comparison operators: ==, ===, !=, !==, >, <, >=, <=

// // 4. Logical operators: &&, ||, !

// // 5. Bitwise operators: &, |, ^, ~, <<, >>, >>>

// // 6. Ternary operator: condition ? expression1 : expression2

// // 7. Unary operator:- +, -, ++, --, typeof, instanceof(yah hme btata h ki koi value kis type ka h jaise koi variable array ka h ki nhi), void, delete(ye ek value pr lgte h).

// // note: instanceof aur typeof me farq h ki typeof hme value ka type btata h jabki instanceof hme value ka constructor btata h ki wo kis type ka object h.
// let a = [];
// a instanceof Array; //true
// a instanceof Object; //true because array is also an object in JavaScript

//let a = 12;
// typeof a; //number

// //-------------------------------------------------------------------------
//exercise:-
// let x = 10;
// let y = 20;
// if (x > 5 && y < 25) {
//     console.log("A");
// }else {
//     console.log("B");
// }
// //output A

// let temp = 35;
// if (!(temp < 30)) {
//     console.log("It's hot outside.");
// } else {
//     console.log("It's not hot outside.");
// }

// //output: It's hot outside.

// let n = 5;
// let result = n++ + ++n;
// console.log(result); //12

// //===================================================================================================================
//Control flow statements:- control flow statements are used to control the flow of execution of the program. There are different types of control flow statements in JavaScript:

////if, if else, else if, early return and switch case statements
//// if statement:- it is used to execute a block of code if a specified condition is true. if statement can be used alone or with else and else if statements.

// let a = 12;
// if (a > 10) {
//     console.log("a is greater than 10");
// }

////if else statement:- it is used to execute a block of code if a specified condition is true and another block of code if the condition is false. if else statement can be used alone or with else if statements.
////ex.
//  if (a > 10) {
//     console.log("a is greater than 10");
// } else {
//     console.log("a is not greater than 10");
// }

////else if statement:- it is used to specify a new condition to test, if the first condition is false. else if statement can be used with if and else statements.
////ex.
// if (a > 10) {
//     console.log("a is greater than 10");
// } else if (a === 10) {
//     console.log("a is equal to 10");
// } else {
//     console.log("a is less than 10");
// }

////early return statement:- it is used to exit from a function before it reaches the end of the function. It is used to avoid unnecessary code execution and to improve the readability of the code.
////ex.
// function checkNumber(num) {
//     if (num > 0)  return "Positive";
//     else if (num < 0)  return "Negative";
//      else return "Zero";
// }

////switch case statement:- it is used to perform different actions based on different conditions. It is an alternative to if else statement when we have multiple conditions to check.
////ex.
// let day = 3;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }
//===================================================================================================================



