let car = {
    brand : "BMW",
    color : "black"
}
console.log(car);

//! object.keys()
// by this method we can print only keys
console.log(Object.keys(car));

//! object.values()
//by this method we can print the only values
console.log(Object.values(car));

//! Object.seal()
//By this method we cannot add the new keys but we can change the existing values.
Object.seal(car);
// Object.price = "100000";  It is not possible bcoz we can't add new values
car.color = "DarkBlue";   //It is possible
car.brand = "Audi";
console.log(car);

//! Object.freeze();
//By applying this method we cannot add or change the keys and values.
// Object.freeze(car);
// car.brand = "porsche"; //not possible
// car.color = "white";   // not possible

//! Object.isSealed();
//By this method we can check the object is sealed or not
let x = Object.isSealed(car);  //true
console.log(x);

//! Object.isFrozen();
// we can check the object is frozen or not
let y = Object.isFrozen(car);
console.log(y); //false

//! Object.entries()
let arr1 = Object.entries(car);
console.log(arr1);

//! Object.fromEntries()
let obj = Object.fromEntries(arr1);
console.log(obj);


