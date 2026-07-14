//! Arrays
//! Arrays are used to store multiple values in single variable.
//! it is homogeneous and heterogeneous.
//! In javaScript, arrays are not fixed in length.they are growable in nature.
//! To access the array elements we use index positions which starts with 0.
//! To check the number of elements present in an arrray we use length property.
//! datatype of an array is Object

let arr1=[2,4,5,6,3,5,22,34];
let arr2=[undefined,87,null,"hello",true,() => {console.log("arr fun exe");},{name :"john"}];

console.log(arr2[5]);
for(let i=0;i<arr1.length;i++){
    console.log(arr2[i]);
}

let arr3=[[3,9,7],[55,88,76],[98,7,6]];
for(let i=0;i<arr3.length;i++){
 for(let j=0;j<arr3.length;j++){
    console.log(arr3[i][j]);
}
}
//! Array Methods :-

//? 1)push() :- 
//! add the elements at the end of an array.
//! we can pass no of arguments.
//! it returns the new length.
//! it will modify the original array.
console.log(arr1.push(40,30,70)); //returns new length =10
console.log(arr1);

//? 2) pop() :- 
//! removes the last element in an array.
//! No arguments.
//! it returns the removed element.
//! it will modify the original array.
console.log(arr1);
console.log(arr1.pop());  //removes last element and return it //70
console.log(arr1);

//? 3) unshift() :- 
//! add the elements at the beginning of an array.
//! we can pass number of arguments.
//! it returns the new lenght.
//! it will modify the original array.
console.log(arr1.unshift(1000,2000)); // adds the elements at first and returns new length
console.log(arr1);

//? 4) shift() :- 
//! it removes the first element in an array.
//! no arguments
//! it is opposite to pop() method.
//! it returns the removed element.
//! it will modify the original array.
console.log(arr1);
console.log(arr1.shift());  //removes 1000 (first element)
console.log(arr1.shift());  //removes 2000 (last element)
console.log(arr1);

//? 5) splice() :-
//! syntax :- arr1.splice(starting index, no of elements to be deleted, elements to be added);
//! it can add and also removes elements according to our arguments.
//! 3 arguments :- starting index, delete count, elements to be added.
//! it returns the removed element in form of array.
//! it will modify the original array.
arr1 = [10,20,30,40,50];
console.log(arr1.splice(2,2,80)); // removes -[30, 40] and add 80 
console.log(arr1); //[10, 20, 80, 50]
arr1.splice(2,0,10,38,98,76);
console.log(arr1);

//? 6) slice(si , ei) :- extract some part of an array
//! 2 args -starting index,ending index.
//! return the new array.
//! without effecting the original array.

//? 7) concat() :-
//! it is used to merge two or more arrays.
//! it will not change the original arrays, but instead returns a new array.
//! we can pass no of arrays as arguments and it will merge.
arr1 = [1,2,3];
arr2 = [4,5,6];
arr3 = [7,8,9];
console.log(arr2.concat(arr3));  //[4, 5, 6, 7, 8, 9]
console.log(arr1.concat(arr1,arr2,arr3)); //[1,2,3,1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr1);  //[1,2,3]

//? 8) indexOf() :-
//! it will give the index position of an element in an array.
//! and will give the index of first occurance of an element in an array.
console.log(arr2.indexOf(5));   
console.log(arr3.indexOf(9));  
let arr4 = [1,2,3,4,2,5,6,2];
console.log(arr4.indexOf(2)); //2 is the index of first occurance of element 9.

//? 9) lastIndexOf() :-
//! it will give the index of last oocurance of element in an array.
let arr5 = [2,3,4,5,6,2,3,3,5,6];
console.log(arr5.lastIndexOf(3));  //7 is the index of last occurance of element 3.

//? 10) includes() :--
//! it will check whether the element is present in an array or not.
//! it returns boolean value.
console.log(arr5.includes(5));  //true
console.log(arr5.includes(9));  //false bcoz 9 is not present in arr5

//? 11) reverse() :-
//! it will reverse the original array.
//! no arguments
//! it will modify the original array.
let arr6 = [1,2,3,4,5];
console.log(arr6.reverse());  //[5, 4, 3, 2, 1]

//? 12)flat() :-
//! it will convert multi dimensional array into single dimensional array.
//! it will not effect the original array.
let arr7 = [[2,3,4],[5,6,7],[8,9,1]];
console.log(arr7.flat());  //[2, 3, 4, 5, 6, 7, 8, 9, 1]
let arr8 = [2,3,[4,5,[6,7]]];  //there are 2 nested arrays.
console.log(arr8.flat(2));  // here 2- nested array count.
console.log(arr8);

//? 13) join() :--
//! it will join the array elements.
//! argument = console.log(arr9.join('separator'))  default seperator is ,.
//! it returns the string.
//! it will not modify the original array.
let arr9 = [2,3,4,5,6];
console.log(arr9.join('/'));
console.log(arr9.join(' '));

//? 14) toString() :-
//! it converts an array into string.
//! it will not take any arguments.
//! it will not modify the original array.
let arr10 = [2,3,4,5,6];
console.log(arr10.toString());

//? 15) map() :-  **** Imortant ****
//! It is used to perform common arithematic operations on all array elements.
//! it accepts the callback function as an argument.
//! In that callback function we can pass 3 argumensts - current element, index, array.
//! it returns the new array with all the modified elements.
//! Does not modify the original.
let arr11 = [10,20,30,40,50];
console.log(arr11.map(ele => ele==2));  //false
console.log(arr11.map(ele => ele*2));  //[20, 40, 60, 80, 100]


//? 16) filter() :- 
//! it is used to filter the elements based on some condition.
//! it accepts the callback function as an argument.
//! in that callback function we can pass 3 arguments - current element, index, array..
//! it returns the new array with filtered elements based on some condition.
//! it doesn't effect the original array.
let arr12 = [10,30,20,80,94];
console.log(arr12.filter(ele => ele>20));//[30.80,94]  it will filter the and return new array based on condition.
console.log(arr12.filter(ele => ele%2==0)); //[10, 30, 20, 80, 94] 

//? 17) reduce() :- ****
//! reduces the array elements into single value.
//! sum / product of array elements.
//! it accepts callback fun.
//! in that callback fun, we pass 3 arguments.
//! it does not effect the original array.
console.log(arr11.reduce((prev,next)=> prev+next));

//? 18) forEach() :--  ****imp****
//! It is same as map().
//! It is used to perform common arithematic operations on all array elements.
//! it accepts the callback function as an argument.
//! In that callback function we can pass 3 argumensts - current element, index, array.
//! it returns undefined.   
let arr13 = [10,20,30,40,50];
console.log(arr13.forEach(ele => ele==2));  //undefined
console.log(arr13.forEach(ele => ele*2));   //undefined

//? 19) some() :--
//! will check whether atleast one of the condition is true or not.
//! even if one element satisfy condition, then it returns true.
//! it will accept the callback function as an argument.
arr6 = [2,3,4,2,5,6];
console.log(arr6.some(ele => ele%2==0));  //true
console.log(arr6.some(ele => ele%2==1));  //true bcoz atleat one condition will be satisfied

//? 20) every() :--
//! will check condition for every element is true or not.
//!  if condition for every element is satisfied , then it returns true.
//!  if condition for any of the  element is not satisfied , then it returns false.
//! it will accept the callback function as an argument.
arr6 = [2,3,4,2,5,6];
console.log(arr6.every(ele => ele%2==0));  //false
console.log(arr6.every(ele => ele%2==1));  //false bcoz every element should be satisfy the condition.

//? 21) sort() :--
//! it will sort the elements in  order.
//! without arguments it will not work, so we have to give arguments 
//! b-a = it will print in descending order.
//! a-b = it will print in ascending order.
let arr14 = [7,6,23,4,8,9,2];
console.log(arr14.sort((a,b) => a-b));  //it works like bubble sort
console.log(arr14.sort((a,b) => b-a));  //it works like bubble sort
 
let names = ["kattappa","bahubali"]
  
//! Array of objects :-
let students = [
    {
        id : 101,
        name : 'john',
        marks : {
            sci : 90,
            math : 86
        }
    },
    {
        id : 102,
        name : 'scott',
        marks : {
            sci : 90,
            math : 86
        }
    },
    {
        id : 103,
        name : 'miller',
        marks : {
            sci : 90,
            math : 86
        }
    }
]
console.log(students.map(ele => ele.name+"id is :"+ele.id+"he scored "+ele.marks.sci+" in sci"+ele.marks.math+" in math").join('\n'));

