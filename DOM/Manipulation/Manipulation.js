//! How to do Changes

//! 1) To change the context 
//used to change the content of the tags.
// for now we have 3 methods

//! i) innerText :-
// By using this method we can change the context in the tag by selecting tag.
// this method only changes the content.
let x = document.querySelector('p');
console.log(x.innerText);  //para
x.innerText = "this is para 1 after dynamic change."
console.log(x.innerText);  //this is para 1 after dynamic change


//! ii) innerHtml :-
// This method used to change the tags and also centext in the tag.
// this method changes context and also tags.

let y = document.querySelector('p');
console.log(y.innerHTML);
y.innerHTML = "<a><mark>Changed Content</mark></a>";
console.log(y.innerHTML);  // <u><mark>Changed Content</mark></u>

//! iii) textContent :-
// this method is as same as innerText but it will give the hidden content also.

let z = document.querySelector('h2');
console.log(z.textContent);  //This is hidden content 

//! 2) To add styles dynamically

//! i) targetedEle.style.cssProperty = "value";
//? By using this method we can add only one property at a time.

let f = document.querySelector('h1');
f.style.color = "red";
f.style.backgroundColor = "black";
f.style.border = "2px solid";
f.style.borderColor = "yellow";

//! ii) targetedEle.style.cssText = "css property";
//? this method used to add multiple css properties at a time.

let s = document.querySelector('h3');
s.style.cssText = "color : white;background-color : black; font-size : 60px; border: 2px solid black; "
