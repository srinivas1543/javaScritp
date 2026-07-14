//! Indirect access to elements

//? Methods :-
//? 1. document.getElementsById() :-
// It is a method used to target the element by its id.
// it returns direct access to the element. So we don't need to use index number to access the element.
// Syntax :- document.getElementById("id_name")
//example :-

let x = document.getElementById("head1");
x.innerText = "this is dynamically changed text";
console.log(x.innerText);

//? 2.document.getElementsByClassName() :-
// It is a method used to target the element by its class name.
// it returns mentioned tags in the form of html collection which is simillar to Array of object.
// because of html collection we have mention index to access the particular tag.
// syntax : document.getElementsByClassName()[index];

let y = document.getElementsByClassName('demo')[1];
y.innerText = "This is para2 after dynamic change";
console.log(y);

//? 3.document.getElementsByTagName() :-
// It is a method used to target the element by its tag name.
// it returns mentioned tags in the form of html collection which is simillar to Array of object.
// because of html collection we have mention index to access the particular tag.
// syntax : document.getElementsByTagName()[index];

let z = document.getElementsByTagName('span')[0];
z.innerText = "This is span tag after dynamic change";
console.log(z);

//? 4.document.getElementsByName() :-
// It is a method used to target the element by its name which is given in input tag.
// it returns mentioned tags in the form of html collection which is simillar to Array of object.
// because of html collection we have mention index to access the particular tag.
// syntax : document.getElementsByName()[index];

let a = document.getElementsByName('username')[0];
a.innerText = "This is input tag after dynamic change";
console.log(a);

//? 5.document.querySelector() :-
// It is a method used to target the element by its id,classname,name and anything that we can give which.
// but we have to give css selector along with its symbol - "#id".
//  it returns direct access to the element. So we don't need to use index number to access the element.
// syntax : document.querySelector();

let b = document.querySelector('#para1');
b.innerText = "This is para tag after dynamic change";
console.log(b);

//? 6.document.querySelectorAll() :-
// It is a method used to target the element by its id,classname,name and anything that we can give which.
// but we have to give css selector along with its symbol - "#id".
// It returnn the mentioned tags in the form of Node List so we have to give index for this.
// syntax : document.querySelectorAll()[index];

let c = document.querySelector('#para1');
let d = document.querySelector('.class');
let e = document.querySelector('username');

//! Direct Access (Single Element) 
// for this we dont need to give index.
document.getElementById()
document.querySelector()

//! HTML Collection
// for this we have to give index.
document.getElementsByClassName()
document.getElementsByTagName()
//! Node List: index required
document.getElementsByName()
document.querySelectorAll()

//?diff types of accessing each element

//? h1
document.getElementById("head1");
document.getElementsByClassName("demo")[0];
document.getElementsByTagName("h1")[0];
document.querySelector("#head1");
document.querySelector(".demo");
document.querySelectorAll("#head1")[0];
