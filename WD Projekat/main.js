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
    .then(response => {
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
const renderFood = (food) => {
    const foods = document.getElementById('foods');
    
    let resultFoodsHtml = '';

    food.forEach ( food => {
        resultFoodsHtml += `
        <div class="card text-white bg-warning mb-3" style="width: 16rem;">
            <img class="card-img-top" src="${food.imageUrl}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${food.name}</h5>
                <p class="card-text">${food.price} KM</p>
                <button type="button" onclick="buyFood('${food.id}')"class="btn">Buy</button>
                <button type="button" onclick="editFood('${food.id}')"class="btn">Edit</button>
            </div>
        </div>
        `;
    });

     foods.innerHTML = resultFoodsHtml;
}
const buyFood = async (id) => {
    await fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Food/${id}`, {
        method: "DELETE",
    }).then((response) => {
        if(response.ok){
            console.log(response);
        }
    })
}
const addFood = async () =>{
const foodName = document.getElementById('foodName').value;
const foodPrice = document.getElementById('foodPrice').value;
const foodImage = document.getElementById('foodImage').value;
const foodID = document.getElementById('foodID').value;

await fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Food`, {
    method: 'POST', 
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        "id": foodID,
        "name": foodName,
        "price": foodPrice,
        "imageUrl": foodImage
        
    })
})
.then(response => {
    if(response.ok){
        console.log(response);
    }
})
}


const editFood = () => {
    document.getElementById('editFoodMenu').style.opacity='1';
}




const editFoodForm = async () => { 
    const editedFoodID = document.getElementById('editfoodID').value;
    const editedFoodImage = document.getElementById('editfoodImage').value;
    const editedFoodName = document.getElementById('editfoodName').value;
    const editedFoodPrice = document.getElementById('editfoodPrice').value;

    await fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Food`, {
        method: 'PUT', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            "id":  editedFoodID,
            "name": editedFoodName,
            "price": editedFoodPrice,
            "imageUrl": editedFoodImage
        })
    })
    .then(response => {
        if(response.ok){
            console.log(response);
        }
    })
}
const removeFoodForm = () => {
    document.getElementById('editFoodMenu').style.opacity='0';
}