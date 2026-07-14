//!  Arrow Function
 
//! syntax:-

//             let x=(parameter) =>
//                   {
//                    statements...
//                    return value;
//                    }
//                    x(arguments);


//! types of declaring arrow functions
// let add = (a,b) => {console.log(a+b);}.
// let demo = ___ => {console.log("demo is exe")}  :-when 0 parameters then we use _(underscore) instead of()(paranthesis).
// let x = a => { }   when we have return along with other statements, we use { }.
// let x = a => a    when we have only 1 return statement { } is optional.

//!
let sum = (a,b) => {console.log(a+b);}
sum(4,8);

let sum1=_ => {return "this is no parameters "}
console.log(sum1());   //this is no parameters

//!
let sum2 = b =>{ console.log("this is the function with return statement with other statements also"); return 200;}
// let x=;
console.log(sum2(9));

//! 
let sum3 = c => 10000;
console.log(sum3(8));  //10000

//!  prime number using arrow function
let isPrime = n => {
    let c=0;
    for(let i=1;i<=n;i++){
        if(n%i==0){
            c++;
        }
    }
    if(c==2){
        return true;
    }
    return false;
}
if(isPrime(3)){
    console.log("yes it is a prime number");
}else{
    console.log("no it is not a prime number");
}
document.writeln(isPrime);