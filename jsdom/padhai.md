//dom manipulation
//html se element select krna
//text badalna
//html badalna
//css badalna
//attribute badalna
//event listener add krna 

<!-- *html se kaise element select krte h?
=====================================
old code me use hone wale:-getElementById,getElementsByClass
new codes me use hone wale selector:- querySelector, QuerySelectorAll -->

<!-- in script selecting elements -->

var select = document.getElementById("heading1");
console.dir(select);
var selectByClass = document.getElementsByClassName("head");
console.dir(selectByClass);
var selectByQuery = document.querySelector("h1");//first h1 tag selects
console.dir(selectByQuery);
var selectAllByQuery = document.querySelectorAll("h1");//all h1 tags selects and it stores in a nodelist
console.dir(selectAllByQuery); 
