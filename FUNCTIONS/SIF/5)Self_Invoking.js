//! Self Invoking Function(SIF) :-
//! IIFE(immediately invoking function expression)
//? The function which is executes itself is called SIF.
//? It executes only once.
//? previous line of SIF must be terminated with semicolon(;).
//? advantage is to avoid global namespace pollution.
//? syntax is (fun)().

//!
console.log("start");  
(function fun1(a){
    var b = 10;
    console.log("fun is exe");
    console.log(a);
})(10);

let fun2=(function (a){
    console.log("fun2 is exe");
    console.log(a);
})(20);

let fun3=(function (a){
    console.log("fun3 is executed");
    console.log(a);
})(40);

(function fun4(a,b){
    console.log(a,b);
    console.log(a+b);
})(20,70);

let fun5=(() =>{
    console.log("true");
})()
console.log(fun5);  //undefined bcoz the fun doesn't have any return value.

let fun6=(a => a)(5)
console.log(fun6);
