// fetchAPI
let ul = document.querySelector("ul");
let tbody = document.querySelector("tbody");
let x = fetch("https://api.github.com/users");
console.log(x);
x.then(response=>response.json())
.then(result => {
    result.map((obj)=>{
        ul.innerHTML += `<li>${obj.login}</li>`;
        tbody.innerHTML += `
        <tr>
            <td>${obj.id}</td>
            <td>${obj.login}</td>
            <td>${obj.node_id}</td>
            <td><img src=${obj.avatar_url} height="100" width="100"></td>
        </tr>`
    })
});