/* BURGIR */
const hamburger=document.getElementById("hamburger");
const prviBurger=document.getElementById("prviBurger");
const drugiBurger=document.getElementById("drugiBurger");
const treciBurger=document.getElementById("treciBurger");
const navUl=document.getElementById("nav");

hamburger.addEventListener("click",() =>{
    navUl.classList.toggle("show");

    prviBurger.classList.toggle("burgeri");
    drugiBurger.classList.toggle("burgeri");
    treciBurger.classList.toggle("burgeri");

    drugiBurger.classList.toggle("drugiBurger");
    treciBurger.classList.toggle("treciBurger");
})
let food=[];

fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Food')
    .then(response=>{
        if(!response.ok)
            throw Error('Error');
        return response.json();
    })
    .then((data)=>{
        food=data;
        renderFood(data);
    })
    .catch(err=>{
        console.log(err);
    })
const renderFood=(food)=>{
    const foods = document.getElementById('foods');
    
    let resultFoodsHtml = '';

    food.forEach(food => {
        resultFoodsHtml += `
        <div class="card text-white bg-warning mb-3" style="width: 18rem;">
            <img class="card-img-top" src="${food.imageUrl}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${food.name}</h5>
                <p class="card-text">${food.price}</p>
                <button type="button" onclick="buyBook('${food.id}')"class="btn">Buy</button>
            </div>
        </div>
        `;
    });

     foods.innerHTML = resultFoodsHtml;
}
