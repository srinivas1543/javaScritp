//! Operators - Used to perform the operation between the two operands
//! Arithematic (+ , - , * , / , % )
//! Assignment  (= , += , -= , *= , /= , %= )
//! Relational  (> , < , <= , >= , == , === , != , !==)
//! Logical     (&& , || ,!)
//! Bitwise     (&, |)
//! Unary       (++ , --)
//! typeof  
//! Ternary Operator 


//!  Arithematic (+ , - , * , / , % )
console.log(10 + 20);
console.log(10 + true);     //10+1= 11
console.log(10 + null);     //10+0=10
console.log("hello" + "u3yq")
console.log(10 - 10);
console.log(10 + 20);
console.log(10 - "hello");  //NaN
console.log("hello" - "hello");  //NaN
console.log(10 - "10");     //10 - 10 = 0
console.log("10" - "10");  //0
console.log("hello"*2);    //NaN
console.log("20" * 2);      //40
console.log(20 / '2');     //10
console.log(40 / "20");    //2
console.log("hello" / 2);  //NaN
console.log("20" % "10");  //0
console.log("hello" % 10);  //NaN

//! Assignment  (= , += , -= , *= , /= , %=)
let a=10;
console.log(a);
a += 10;
console.log(a);
a -= 10;
console.log(a);
a *= 10;
console.log(a);
a /= 10;
console.log(a);
a %= 10;
console.log(a);

//! Relational (> , < , <= , >= , == , === , != , !==)
console.log(20 > 10);         //true
console.log(10 > 20);         //false
console.log(20 < 10);         //false
console.log("20" < 10);         //false
console.log("20" < "10");         //false
console.log("20" <= "10");         //false
console.log("20" >= "10");         //true
//? Equality operator(==) is will only check the data is equal or not
//? it will avoid the checking of datatype
console.log(20 == 20);   //true
console.log(20 == "20");  //true
console.log("true" == "true");  //true
console.log("srinivas" == "suppala")    //false
console.log(20 == true);  //false

//? Strictly equality operator (===) it will check the datatype 
console.log(10 === "10");
console.log("10" === "10");
console.log("20" > "120");  //true

//! Bitwise (& , |)
console.log(20 & 30);
console.log(120 & 60);
console.log(30 | 80);

//! Unary (++ , --)
//! two types 
//? Increment
// todo      -preIncrement(++a)
// todo      -postIncrement(a++)
//? Decrement 
//todo       -preDecrement(--a)
//todo       -postDecrement(a--)

let c = 10;
let d = 9;
console.log(c++ - --c + ++d + d++);
//           10 - 10  +  10 +  10

a = 10;
b = 7;
console.log(b++ + --a + b-- + --b + ++a + a++ + b++);
//53

console.log(a,b);
