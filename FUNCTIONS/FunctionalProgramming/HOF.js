//! callback funtion = The function which passed as an argument to another function.
//! Higher Order funtion - The fun which accept another fun as ann argument.
//! They are used to perform the generic task.

/*function add(a,callback){
    console.log(a+callback());
}
add(10,_ => 5);*/

// let add = (a,b) => a+b;
// let mul = (a,b) => a*b;
// let sub = (a,b) => a-b;
// let div = (a,b) => a/b;

// console.log(add(10,20));
// console.log(mul(10,20));
// console.log(sub(10,20));
// console.log(div(10,20));

// function perform(num1,num2,callback){
//     console.log(callback(num1,num2))
// }
// perform(10,20,add);
// perform(10,20,mul);
// perform(10,20,sub);
// perform(10,20,div);

function add(a, b) {
  return a + b;
}
function mul(a, b) {
  return a * b;
}
// Callback in action
function perform(num1, num2, callback) {
  console.log("Result:", callback(num1, num2));
}
perform(10, 20, add); // Result: 30
perform(10, 20, mul); // Result: 200
