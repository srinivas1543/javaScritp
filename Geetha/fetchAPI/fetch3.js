//async and await - ES-6 feature
// console.log("start");
// async function demo(){
//     return ("hello");
// }
// (async()=>{
//     let x = await demo();
//     console.log(x);   
// })()   
// console.log("end");

let btn = document.querySelector("button");
btn.addEventListener("click",async ()=>{
    fetchApi();
})

let fetchApi =async ()=>{
    try{
      let x =  await fetch("https://fakestoreapi.com/products");
        console.log(x);     //response
        x.json().then(result=>{console.log(result);
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
        })
        
    }
    catch(err){
        console.log(err);
    }
}
// fetchApi()