//1)
let numbers = [10, 20, 30];

let result = numbers.map(ele => {
    return ele * 2;
});

console.log(result); // [20, 40, 60]

//2  even or odd
let nums = [20,21,45,44,32];
let even =nums.map(ele => {
    if(ele%2==0){
        return ele+" is a even number";
    }else{
        return ele+" is not a even number";
    }
})
console.log(even);

//3 prime  find the prime check for element 40
let arr = [20,30,40,78,56];
let prime = arr.map(ele => {
    if(ele === 40){
        let count=0;
        for(let i=1;i<=ele;i++){
            if(ele%2==0){
                count++;
            }
        }
        if(count == 2){
            return ele+" is prime number"
        }
        else {
            return ele+" is not prime number"
        }
    }
});
console.log(prime);


// 4) forEach() :--  
let students = [
  { name: "John", marks: 80 },
  { name: "Jane", marks: 90 }
];
students.forEach((student) => {
  student.passed = student.marks >= 85;
  student.grade = student.marks >= 90 ? 'A' : 'B';
});
console.log(students);

// reduce()
let number = [2, 3, 4];
let sum = number.reduce((acc, curr) => acc * curr);
console.log(sum); // 24

let arr1 = [100,200,30,40,90];
let maxx=0;
arr1.reduce((prev,cur) => {
    if(cur>prev){
        maxx=cur;
    }
});
console.log(maxx);