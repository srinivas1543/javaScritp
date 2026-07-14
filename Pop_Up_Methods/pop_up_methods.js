/*let movierulz = prompt("enter your age");
if(movierulz>=18){
    alert("access granted");
    document.writeln("you are eiligble to access this picture");
}
else{
    alert("access denied");
    document.writeln("you are not eligible to access this picture");
}*/
let movierulz = prompt("enter your age");
if (movierulz >= 18) {
    alert("access granted");
    document.writeln("you are eligible to access this picture");
    document.getElementById("moviePic").style.display = "block";
} else {
    alert("access denied");
    document.writeln("you are not eligible to access this picture");
    document.getElementById("moviePic").style.display = "none";
}