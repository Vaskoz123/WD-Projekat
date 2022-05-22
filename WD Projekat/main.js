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