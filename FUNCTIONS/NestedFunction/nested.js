//! nested function - one function ina another function is called nested function.

function outer(a,b){
    console.log("outer :"+a+b);
    function inner(x,y){
        console.log("inner :"+x+y);
    }
}
outer(4,4);  //without calling outer inner will not execute.
 inner(2,2);