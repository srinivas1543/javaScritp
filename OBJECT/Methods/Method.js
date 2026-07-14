//! Method in javaScript
// The function which given inside the object is called Method.

//! 1)
// let person = {
//     name : "jhon",
//     id : 101,
//     sal : 1000,
//     address : {  //this is the method
//         area : "punjagutta",  
//         pincode : 500085
//     }
// }
// console.log(person.address);

//! 2)
// let person = {
//     name : "jhon",
//     id : 101,
//     sal : 1000,
//     address : function (){
//         console.log("the address is punjagutta");
//     }
// }
// person.address();

//! 3)
/*let person = {
    name : "jhon",
    id : 101,
    sal : 1000,
    address : function (){
       console.log(this.name+" address is punjagutta");  //this will refer the current object
    }
}
person.address(); */


//! 4)
/*let person = {
    name : "jhon",
    id : 101,
    sal : 1000,
    address : {
        area : function (){
        console.log(this.name+" the address is punjagutta");
        },
        pincode : 500075
    }
}
person.address.area(); */

//! 5)
/*let person = {
    name : "jhon",
    id : 101,
    sal : 1000,
    address : () => {  //arrow function
       console.log(this.name+" address is punjagutta");  //this keyword will not work in arrow function.
    }
}
person.address();
*/
let person = {
    name : "jhon",
    id : 101,
    sal : 1000,
    address(pincode){  //arrow function
       console.log(`the addres is punjagutta and pincode is ${pincode}`);  //this keyword will not work in arrow function.
    }
}
person.address(800075);