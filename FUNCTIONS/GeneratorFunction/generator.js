//! Generator funtion :-
//!A generator function is a special type of function that can pause and resume its execution.It returns an iterator object which we can control using the .next() method.
//function* → defines a generator.
//yield → pauses the function and returns a value.
//.next() → resumes execution from where it paused.


function * demo(){
    console.log("one");
    yield 100;
    console.log("two");
    yield 200;
    console.log("two");
    yield 300;
}
// console.log(demo());
let gen = demo();
let rv1 = gen.next();
console.log(rv1);  //{value : 100 , done : false}
let rv2 = gen.next();
console.log(rv2);  //{value : 200 , done : false}
let rv3 = gen.next();
console.log(rv3);  //{value : 300 , done : false}
let rv4 = gen.next();
console.log(rv4);  //{value : undefined , done : true} // it ends because it became true.