//! 3) Manipulation :-

//! i)to add Attributes:-
// Syntax :- taregetedEle.setAttributes("attribute name","value");
document.links[0].setAttribute("id","hyperlink");
document.links[0].setAttribute("class","aclass1");
document.querySelector("p").setAttribute("class","pclass1");
console.log(document.links[0]);  //
document.links[0].href= "https://www.google.com/?zx=1756987801256&no_sw_cr=1";

//! ii) to remove attributes:-
// syntax :- targetedEle.removeAttribute("attributeName");
document.querySelector("h1").removeAttribute("class")
console.log(document.querySelector("h1"));  //h1#head1

//! iii) to addclass names :-
// syntax :- targetedEle.className("clasname");
// but here we can add only one class name at a time.
document.querySelector("h1").className="head1class2";

//! iv) to add multiple class names :-
// syntax :- targetedEle.classList.add("clasname","classname"," "......);

document.querySelector("p").classList.add("para1","demo","classname","hello");

//! v) to remove class name:-
// syntax :- targetedEle.classList.remove("clasname");
document.querySelector("a").classList.remove("aclass1");

//! vi) toggle method:-
//this method used to check the classname is present or not. if class name is present then it remove that .if class name is not present then it will add the class name.
//syntax :- targetedEle.classList.toggle("demo")

document.querySelector("a").classList.toggle("demo"); // demo is not present. so it will add in the a tag.
document.querySelector("p").classList.toggle("demo"); // demo is present in p tag. so it will remove from the p tag.

//! vii) To create an element or tag:-
//! document.createElement("element name") :-
// used to create an element dynamically.
//! document.appendchild(element name) :- used to create an element
// by this method we can only add one element.
//! document.append(element,element,element.....) :-
// we can add multile elements at a time

let ele = document.createElement("ul")
document.body.appendChild(ele);
for(let i=0;i<3;i++){
    let li1 = document.createElement("li");
    li1.innerText = "list item";
    ele.appendChild(li1);
}
let ele2 = document.createElement("table");
document.body.append(ele2);
let thead =document.createElement("thead");
let tbody =document.createElement("tbody");
let tr1 =document.createElement("tr");
let tr2 =document.createElement("tr");
ele2.append(thead,tbody)
thead.append(tr1);
tbody.append(tr2);
for(let i=0;i<3;i++){
    let th=document.createElement("th")
    tr1.append(th)
    th.innerText = "table head"
    let td=document.createElement("td")
    tr2.append(td)
    td.innerText = " table data"
}

console.log(ele2);
