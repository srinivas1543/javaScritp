//! Mouse click and double click
//it will work when mouse is clicked.
function fun1(){
    console.log("click is executed");
}

function fun2(){
    console.log("double click is executed");
}

//! Mouse over and out
// it will work when it is hovered.
let img = document.getElementsByTagName("img")[0]
console.log(img);
function newImg(){
    img.src="https://cdn.pixabay.com/photo/2025/08/02/15/43/collared-macaw-9750855_1280.jpg"
}
function oldImg(){
    img.src="https://cdn.pixabay.com/photo/2025/08/11/07/18/nurturing-swan-9767495_1280.jpg"
}

//! Mouse up and down
// It will work when we click and hold.
let para1 = document.getElementById("para1")
function newStyle(){
    para1.style.cssText = "background-color: black; color: white";
}
function oldStyle(){
    para1.style.cssText = "background-color: white; color: black"
}

//! Keyboard Pressed
// when we press keys and released, it will work
function fun3(){
    console.log("key is pressed");
}

function fun4(){
    console.log("key is released");
}

//! Form submit
// when we submit the form it will work.
function submit(){
    let username = document.getElementsByName("username")[0]
    let password = document.getElementsByName("password")[0]
    console.log(`username is {username}`);
    console.log(`password is {password}`);

}

function change(){
    document.getElementById('head2').innerText++;
}

