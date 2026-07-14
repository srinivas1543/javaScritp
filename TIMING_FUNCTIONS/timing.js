//! Timing functions :-
//! they are used to asynchronous task.
//! theya re 4 types.
//! 1)setTimeOut(callback func,time delay);
// - it will execute 1 time after the time given.
//! 1)setInterval(callback func,time delay);
// - it is same as setTimeOut(); 
// - it will keep on executing untill we stop.
// - but main difference is setTimeOut() will execute only 1 time but setInterval() will execute again after every second or according to time given by us. 
//! 1)clearTimeOut(function variable);
//  - stops the execution of setTimeOut()
// - it accepts the variable returned by the setTimeOut();
//! 1)clearInterval(function variable);
//  - stops the execution of setInterval()
// - it accepts the variable returned by the setInterval();



let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
//! setTimeOut():-
let x;
btn1.addEventListener('click' ,()=>{
    x= setTimeout(() => {
    console.log("this is setTimeOutfunction ");
  },4000);
})
//! clearTimeOut :-
btn2.addEventListener('click',()=>{
    clearTimeout(x)
});


//!setInterval :-
let y;
btn3.addEventListener('click' ,()=>{
    y= setInterval(() => {
      console.log("this is setInterval function");
  },1000);
});
//! clearInterval :-
btn4.addEventListener('click',()=>{
    clearInterval(y);
});
