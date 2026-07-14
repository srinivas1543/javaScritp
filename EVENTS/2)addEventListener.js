//! click and double click.
let btn = document.querySelector('button');
btn.addEventListener("click",() =>{
    console.log("the button is clicked ");
})

let doub = document.querySelector('#dbl');
doub.addEventListener("dblclick",() => {
    console.log("the button is double clicked");
})

//! mouseover and mouseout:-
let a = document.querySelector('#para1');
a.addEventListener("mouseover",() =>{
    a.style.cssText = "color: white; background : black"
})
a.addEventListener("mouseout",() =>{
    a.style.cssText = "color: black; background : white"
})

//! mouseup and mousedown :-
let img = document.querySelector('img');
img.addEventListener("mouseup",() => {
    img.src = "https://cdn.pixabay.com/photo/2025/06/08/16/06/horse-9648183_1280.jpg";
})
img.addEventListener("mousedown",() => {
    img.src = "https://cdn.pixabay.com/photo/2025/08/11/07/18/nurturing-swan-9767495_1280.jpg";
});

let inp = document.querySelectorAll('input')[0];
let inp1 = document.querySelectorAll('input')[1];
inp.addEventListener("keydown",() =>{
    console.log("pressed");
})
inp1.addEventListener("keyup",() =>{
    console.log("pressed");
})