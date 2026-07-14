/*var a=10;
let b=20;
const c=30;
console.log(a,b,c);
{
    console.log(a,b,c);
} */

//2)
console.log(a);  //undefined
var a = 10;
let b = 20;
console.log(a,b);  //10,20
{
    console.log(a,b);  //error
    var a = 100;
    let b = 200;
}