let container = document.getElementById("container");

fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then(result=>{
    console.log(result);
    result.map((obj)=>{
        container.innerHTML += `
        <div class="card">
            <img height="100" width="100" src=${obj.image}>
            <h3>${obj.title.slice(0,30)}</h3>
            <p>${obj.description.slice(0,50)}</p>
            <b>${obj.price}</b>
            <button>Add to cart</button>
        </div>`
    })
});

let sup = document.querySelector("sup")
container.addEventListener("click",(e)=>{
    if(e.target.innerText === "Add to cart"){
        let cart = Number(sup.innerText);
        cart+=1;
        sup.innerText = cart;
    }
})