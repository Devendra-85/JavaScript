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

//query selector
var select = document.getElementById("heading1");
console.dir(select);
var selectByClass = document.getElementsByClassName("head");
console.dir(selectByClass);
var selectByQuery = document.querySelector("h1");//first h1 tag selects
console.dir(selectByQuery);
var selectAllByQuery = document.querySelectorAll("h1");//all h1 tags selects
console.dir(selectAllByQuery);

//query select and data manipulation
var h1 = document.querySelector("h1");
//h1.innerText = "Hello World";//
//h1.innerHTML = "Hello World";
//h1.outerText = "Hello World";
//h1.textContent = "Hello World";
//h1.innerHTML = "<i>book</i>";
h1.hidden = false;
h1.innerHTML = "<div class='row'><div/>";

//these all are used to change the ccontent of the element but they have some differences. 
// innerText and textContent:=these are used to change the text content of the element.
// innerHTML:- it is used to change the HTML content of the element. 
// outerText:- it is used to change the text content of the element and also removes the element from the DOM.

//in html
<h1>Hey How r u??</h1>


