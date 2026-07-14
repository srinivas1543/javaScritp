let body = document.querySelector('body');
let gparent = document.querySelector('#parent');
let child1 = document.querySelector('#child1');
let child2 = document.querySelector('#child2');

gparent.style.cssText = "border : 2px solid black; height: 400px; width: 400px;display: flex ; justify-content:center;align-items:center"
child1.style.cssText = "border : 2px solid black; height: 240px; width: 240px;display: flex ; justify-content:center;align-items:center"
child2.style.cssText = "border : 2px solid black; height: 80px; width: 80px"
body.style.cssText = "display: flex ; justify-content:center;align-items:center"

gparent.addEventListener("click",(event) =>{
    event.stopPropagation();
    console.log("parent is clicked");
    gparent.style.cssText = "border : 2px solid black; height: 400px; width: 400px;display: flex ; justify-content:center;align-items:center;background-color:black";
})

child1.addEventListener("click",(event) =>{
    event.stopPropagation();
    console.log("child1 is clicked");
    child1.style.cssText = "border : 2px solid black; height: 240px; width: 240px;display: flex ; justify-content:center;align-items:center;background-color:red";
})
child2.addEventListener("click",(event) =>{
    event.stopPropagation();
    console.log("child2 is clicked");
    child2.style.cssText = "border : 2px solid black; height: 80px; width: 80px;background-color:blue";
})

body.addEventListener("click",(event) =>{
    event.stopPropagation();
    console.log("body is clicked");
    body.style.cssText = "display: flex ; justify-content:center;align-items:center;background-color:aqua";
})