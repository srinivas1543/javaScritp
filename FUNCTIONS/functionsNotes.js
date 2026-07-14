
//!  FUNCTIONS:-

// one of the non-primitive data type in JavaScript.
// block of code / set of instructions used to perform set of instructions.
// Advantage :- code reusability.
// after declaration funtion we have to call it.
// Datatype of function is function.
// funtion in javaSript can return any type of value.
// we can call/invoke the function for multiple times.

//! Types of functions:-

// 1)Named / General / Normal / function declaration statement
// 2)Anonymous function
// 3)Arrow function
// 4)Function Expression
// 5)STF(Self-Invoking Function)  IIFE(Immediately Invoked Function Expression)
// 6)callback function
// 6)HOF(Higher order function)
// 7)Nested function
// 8)Generator function
// 9)First class function

//! parameters in function
// variables 
// number of parameters can be passed in function
// no use of let,const, or var
// it has local scope
// its default value is undefined.
// it stores any type of value.

//!   Named Function


function add(a,b){
    console.log(a+b);
}
add();  //NaN
add(10);  //NaN  //if we dont give any value to the parameter then its default value will be undefined
add(10,20,30,40,50); //30
add(10,20); //30

//!
function test(){
    console.log("this is a test function");
    return 1000;
}
let x=test(); 
console.log(x);     //this is a test function
console.log(test);  //1000

//!
function sample(a){
    console.log("this is a sample function");
    return "sample function with return value";
}
console.log(sample(4)); //this is a sample function

//!
function sample1(a,b){
    console.log(a*b);
}
sample1(20,60);  //1200

//!
function sample2(){
    return "this is a sample2 function without parameters and with return statement"
}
// let y=sample2(); 
// console.log(y);
console.log(sample2());

//!
function sample3(){
    console.log("this is a sample3 funtion wihout parameters and without return statement");
}
sample3();

//! write a function to print the datatype of given value

function dt(a){
    return typeof a;
}
console.log(dt(5));

//! write a function to print the given name

function  name(a){
    return "my name is "+a;
}
console.log("Suppala Srinivas");

//! write a function to print the full name

function fullName(fn,ln){
    console.log(fn,ln);
}
fullName("Suppala","Srinivas")

//!  write a function to check whether the given number is even or odd
function even(n){
    if(typeof n=="number"){
        if(n%2==0){
        console.log(`the given number ${n} is even`);
    }else{
        console.log(`the given number ${n} is odd`);
    }
    }
}
even(26);
even(29);

//! write a function to print the numbers within the given range
function range(a,b){
    if(typeof a=="number" && typeof b=="number"){
        for(let i=a;i<=b;i++){
        console.log(i);
    }
    }
}
range(10,50);