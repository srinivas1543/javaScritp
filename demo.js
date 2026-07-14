function add(a,b,...arr){
            return a+b;
        }
        const ans = add(2,3,75,6,7,55,334,6);
        console.log(ans);
//! Spread Operator
        let arr1=[1,2,3,4];
        let arr2=[5,6,7,8];
        let arr3 = [...arr1,...arr2,9,10,11];
        console.log(arr3);
            const obj = {
                name:"suppala srinivas",
                age:23,
                id:1257
            }
            const newObj={...obj};
            console.log(newObj.name)
//! rest parameter
        function cal(...arr1){
            let sum=0;
            for(let i=0;i<arr1.length;i++){
                sum+=arr1[i];
            }
            return sum;
        }
        console.log(cal(1,2,3,4,5))
