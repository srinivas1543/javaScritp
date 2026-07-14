//! Promises :-
console.log("start");
let x = new Promise((resolve,reject) => {
    let day = "mrng";
    if(day === "mrng"){
        resolve("godd morning ");
    }
    else{
        reject("it is not good morning")
    }
});
x.then((result) =>{
    document.body.innerHTML = `<h1>${result}</h1>`;
    console.log("resolved");
}).catch((error) =>{
    console.log("error handled but still it is not morning");
}).finally(() =>{
    console.log("finally is executed");
});

console.log("end");

//! second way
new Promise((resolve,reject) => {
    let day = "evening";
    if(day === "mrng"){
        resolve("godd morning all");
    }
    else{
        reject("it is not good morning")
    }
}).then((result) =>{
    document.body.innerHTML = `<h1>${result}</h1>`;
    console.log("resolved");
}).catch((error) =>{
    console.log("error handled but still it is not morning");
}).finally(() =>{
    console.log("finally is executed");
});