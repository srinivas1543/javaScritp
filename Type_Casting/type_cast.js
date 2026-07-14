//  Number
let a="100";
console.log(a);           //100
console.log(typeof a);    //string
let b = Number(a); 
console.log(b);
console.log(typeof b);
console.log(typeof Number("200"));
console.log("50" >= "1000");    //true
console.log(Number("50") >= Number("1000"));  //false
console.log(Number(true));
console.log(Number(false));
console.log(Number("hello"));
console.log(Number(undefined));

//Boolean
//it will convert every number into true except 0
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean("100"));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean("hello"));

//String ()
// it will convert everything into string
console.log(String(100));
console.log(String(typeof String(100)));
console.log(String(true));
console.log(String(false));
console.log(String(undefined));
console.log(String(null));