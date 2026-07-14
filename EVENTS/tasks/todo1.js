let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", () =>{
    ul.innerHTML += `
    <li>
        <span>${input.value}</span>
        <button>edit</button>
        <button>delete</button>
    </li>`
        input.value = ""
});

ul.addEventListener("click",(e) =>{
    console.log(e.target);
    if(e.target.innerText === "delete"){
        e.target.parentElement.remove();
    }
    else if(e.target.innerText === "edit"){
        input.value = e.target.previousElementSibling.innerText;
        e.target.innerText = "update";
        btn.style.display = "none";
    }
    else if(e.target.innerText === "update"){
        e.target.previousElementSibling.innerText = input.value;
        input.value = "";
        e.target.innerText = "edit";
        btn.style.display = "inline";
    }
})