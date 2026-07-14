//! for loop
 let n=4;
 let s=" ";
for(let i=1;i<=n;i++){
    for(let j=1;j<i+1;j++){
        document.writeln(j);
    }
    document.writeln("<br>")
}

//! while loop
let a=100;
while(a>0){
    document.writeln(a);
    document.writeln("<br>")
    a--;
}
//! do while loop
let b=100;
do {
    document.writeln(b);
    document.writeln("<br>")
    b--;
}while(b>0);