let body = document.querySelector('body');
body.addEventListener("click",()=>{
    console.log("body is clicked");
})
let button1 = document.querySelectorAll('button')[0];
let button2 = document.querySelectorAll('button')[1];
button1.addEventListener("click",() =>{
    button1.style.cssText = "background-color: black; color:white";
    console.log("button1 is pressed");
});

button2.addEventListener("click",() =>{
    button2.style.cssText = "background-color: black; color:white";
    console.log("button2 is pressed");
})

let div1 = document.querySelector('div');
div1.addEventListener("click",() =>{
    div1.style.cssText = "background-color: black; color:white";
    console.log("div is pressed");
})