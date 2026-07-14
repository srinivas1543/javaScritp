//! Static methods :-

let a = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve("a is resolved");
        //  reject("a is rejected");
    },10000)
});
let b = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        // resolve("b is resolved");
         reject("b is rejected");
    },100)
});
let c = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve("c is resolved");
        //  reject("c is rejected");
    },1000)
});

//! 1) Promise.all([p1,p2,p3...]);
//! - if all promises are fullfilled then it returns fullfilled promise with array as result(in that array all the promises result).
//! - if any promise is in rejected state, then it will not check the remaining promises and returns the reason// error why that promise is rejected. 

let x = Promise.all([a,b,c]);
console.log(x);  
// f  f  f =  promise fullfilled ["a is resolved","b is resolved","c is resolved"]
// f  r  f =  promise rejected reason.error of b is rejected will be returned
// r  f  f =  promise rejected reason.error of a is rejected will be returned
// r  r  r =  promise rejected reason.error of a is rejected will be returned

//! 2) Promise.allSettled() - accept array of promises.
//! - if all promises are fullfilled then it returns a fillfilled promise with array of objects as result(in that object all the promises status & result).
//! - if all promises are rejected then it also returns a fillfilled promise with array of objects as result(in that object all the promises status & result).
//! - if anyone promise is in rejected state ,returns a fullfilled promise with array of objects as result(in that object all the promises status &result).

let y = Promise.allSettled([a,b,c]);
console.log(y);
// f  f  f =  promise fullfilled [{status:'fullfilled',reason:''},{status:'fullfilled',reason:''},{status:'fullfilled',reason:''}]
// f  r  f =  promise fullfilled [{status:'fullfilled',reason:''},{status:'rejected',reason:''},{status:'fullfilled',reason:''}]
// r  f  f =  promise fullfilled [{status:'rejected',reason:''},{status:'fullfilled',reason:''},{status:'fullfilled',reason:''}]
// f  f  r =  promise fullfilled [{status:'fullfilled',reason:''},{status:'fullfilled',reason:''},{status:'rejected',reason:''}]
// r  r  r =  promise fullfilled [{status:'rejected',reason:''},{status:'rejected',reason:''},{status:'rejected',reason:''}]

//! 3) Promise.any() - accepts an array of promises.
//! - returns the value of the **first fulfilled** promise according to time taken by promise.
//! - if all the promises are fullfilled then it will return the promise which have less time.
//! - ignores all rejected promises until one is fulfilled.
//! - if **at least one** promise is fulfilled → returns a fulfilled promise with that value.
//! - if **all promises are rejected** → returns a rejected promise with an `AggregateError`
//!   (contains all rejection reasons).
let z = Promise.any([a,b,c]);
console.log(z);

// f10s  f3s  f5s = promise fullfilled return result of b promise
// f10s  r3s  f5s = promise fullfilled return result of c promise
// r10s  r3s  r5s =  AggregateError: All promises were rejected

//! 4) Promise.race() - accepts an array of promises.
//! - returns the result of the **first settled** promise (fulfilled or rejected).
//! - whichever promise settles (success or failure) first, that result is returned.
//! - does not wait for others once one settles.
//! - if first settled promise is fulfilled → returns fulfilled promise.
//! - if first settled promise is rejected → returns rejected promise.
let n = Promise.race([a,b,c]);
console.log(n);

// f10s  f3s  f5s = promise fullfilled → result of b (first to settle in 3s)
// f10s  r3s  f5s = promise rejected   → result of b (rejects first in 3s)
// r10s  r3s  r5s = promise rejected   → result of b (rejects first in 3s)
// f1s   r5s  f7s = promise fullfilled → result of a (first to settle in 1s)

//! diff between Promise.any() && Promise.race () 
// both will return only one promise 
// but Promise.any() will return only fullfilled promise which has less time.
// Promise.race() will return promise(fullfilled or rejected) which has less time
