//! concatination - joining or merging two or more literals
//! In js we cna achieve concatination by using + and ,

//? number + number = addition
//? string + number = concat
//? number + boolean = addition
//? number + undefined = NaN
//? string + null = concat  null is converted to 0.

 //? String +number = concat
 //? String +string = concat
 //? String +bool = concat
 //? String +undefined = concat
 //? String +null = concat


//? bool + number = addition
//? bool + string = concat
//? bool + boll = addition
//? bool + undefined = NaN
//? bool + null = addition

  

console.log(10+20);
console.log(10+"hello");
console.log(10+true);
console.log(10+false);
console.log(10+true+false);
console.log(10+undefined);   //NAN - not a number
console.log(typeof NaN);     //number
console.log(10+null);
console.log(30+60+"hello"+true+false);
console.log(10+20+"hello",10+40);  //30hello 50