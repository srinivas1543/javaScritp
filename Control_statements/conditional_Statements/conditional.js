//!Conditional statements
//? The conditional statements are used to perform different actions based on different conditions.
//? if, if else, else if,nested if, switch

//!if syntax
// if (condition) {
//    code to be executed if the condition is true
// }

//! if else syntax
// if (condition) {
//    code to be executed if the condition is true
// } else {
//    code to be executed if the condition is false
// }

//! else if syntax
// if (condition1) {
//    code to be executed if condition1 is true
// } else if (condition2) {
//    code to be executed if condition2 is true
// } else {
//    code to be executed if both condition1 and condition2 are false
// }

//! nested if syntax
// if (condition1) {
//    code to be executed if condition1 is true
//   if (condition2) {
//      code to be executed if condition2 is true
//   }
// }

//!switch syntax
// switch (expression) {
//   case value1:
//      code to be executed if expression === value1
//     break;
//   case value2:
//    code to be executed if expression === value2
//     break;
//   default:
//       code to be executed if expression doesn't match any case
// 

//! WAP to check eligible for army age >18  height > 6 weight > 60 
  let age = 20;
  let height = 6.1;
  let weight = 65;

  if (age > 18 && height > 6 && weight > 60) {
    console.log("Eligible for army");
  } else {
    console.log("Not eligible for army");
  }

//! WAP to prints given number is positive or negative
  let number = -5;

  if (number > 0) {
    console.log("Positive Number");
  } else {
    console.log("Negative Number");
  }

//!WAP to print all prime numbers between 1 to 100
  for (let i = 2; i <= 100; i++) {
    let c=0;
    for(let j=1;j<=100;j++){
        if(i%j==0){
            c++;
        }
    }
        if(c==2){
           document.writeln(i);
           document.writeln("<br>");
            c==0;
        }
    }


//! WAP to print the count of even numbers between 1 to 450
  let count = 0;
  for (let i = 1; i <= 450; i++) {
    if (i % 2 == 0) {
      count++;
    }
  }
  console.log("Count of even numbers between 1 to 450 is: " + count);


  //! WAP to check given number is divisible by 3 and 7 are not
  let num = 21;

  if (num % 3 == 0 && num % 7 == 0) {
    console.log("Divisible by 3 and 7");
  } else {
    console.log("Not divisible by 3 and 7");
  }


  //! WAP  to print multiples of 2.
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }

  //! Else if ladder
    //age>18 height>6 weight>60
    if(age<18){
      console.log("nto eligible for army because your age is less than 18 years");
    }
    else if(height<6){
      console.log("you are not eligible for army becaause you height less than 6 feet");
    }
    else if(weight<60){
      console.log("you are not eligible for army because you weight is less than 60");
    }
    else{
      console.log("you are eligible for army");
    }

    //! nested if
    num = 10;
    if(num>0){
      if(num%2==0){
        console.log(`yes the ${num} is positive and also even`);
      }else{
        console.log(`the ${num} it is positive but not even`);
      }
    }else{
      if(n%2==0){
        console.log("the number is negative but even");
      }else{
        console.log("the number is negative and also odd");
      }
    }

    //! Switch case
    let day = "tuesday";
    switch(day){
      case "sunday":
        console.log("it is holy day because it is sunday");
        break;
      case "monday":
        console.log("it is working day because it is monday");    
        break;
      case "tuesday":
        console.log("it is working day because it is tuesday");
        break;
        console.log("it is working day because it is wednesday");
        break;
      case "thursday":
        console.log("it is working day because it is thursday");
        break;
        case "friday":
        console.log("it is working day because it is friday");
        break;
      case "saturday":
        console.log("it is holy day because it is saturday");
        break;
        default:
        console.log("you are a dabba developer because the matches you are giving are not matching with any case");
    }



    let AvailableBalance = 1000;
    let operation = prompt("enter the operation that you want me to do it");
    let amount = number(prompt("enter the amount that you want to credit or debit"));
    if(operation === "credit"){
      AvailableBalance+=amount;
      console.log(`credited successfully.. your available balance is ${AvailableBalance}`);
    }
    else if(operation === "debit"){
      if(AvailableBalance >= amount){
        AvailableBalance -= amount;
        console.log(`debited successfully.. your available balance is ${AvailableBalance}`);
      }else{
        console.log("your availableBalance is ot enough to perform this operation");
      }
    }
    else{
      console.log("you are stupid that you are giving worng input for operation");
    }