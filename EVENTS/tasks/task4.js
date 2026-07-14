let btn1 = document.querySelectorAll('button')[0];
let btn2 = document.querySelectorAll('button')[1];
let p = document.querySelector('p');

    btn1.addEventListener("click",() =>{
        p.style.display= "none";
    });
    btn2.addEventListener("click",() =>{
        p.style.display= "block"; 
    });