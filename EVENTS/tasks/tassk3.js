let ul = document.querySelector('ul');
ul.addEventListener("click",(e) =>{
    console.log(e.target);
    e.target.style.backgroundColor = e.target.innerText;
})
ul.addEventListener("mouseout",(e) =>{
    console.log(e.target);
    e.target.style.backgroundColor = e.target.white;
    e.target.style.Color = e.target.innerText;
})

let table = document.querySelector('table');
table.addEventListener("click",(e) =>{
    console.log(e.target);
    e.target.style.backgroundColor = e.target.innerText;
})

