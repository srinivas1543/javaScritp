let container = document.getElementById('container');
let cart = document.getElementById('cart');

let x = fetch("https://fakestoreapi.com/products");
// console.log(x);
x.then(response => response.json())
.then(result =>{
    result.map((obj) => {
        container.innerHTML += `
        <div class="card">
            <img height="100" width="100" src=${obj.image}>
            <p>${obj.description.slice(0,50)}</p>
            <b>${obj.price}</b>
            <button>Add to card</button>
        </div>
        `
    });
});
let container1 = document.getElementById('container1');
let sup = document.querySelector('sup');
container.addEventListener("click", (e) =>{
    if(e.target.innerText === "Add to card"){
       let num = Number(sup.innerText);
       sup.innerText = num+=1;

       x.then(response => response.json()).then(result =>{
        console.log(result);
        container1.innerHTML += `
        <div class="card1">
            <img height="100" width="100" src=${result.image}>
            <p>${result.description.slice(0,50)}</p>
            <b>${result.price}</b>
        </div>
        `
       })

    }
})
