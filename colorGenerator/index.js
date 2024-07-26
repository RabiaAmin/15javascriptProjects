
let colorCode =  document.querySelector("span");
let btn = document.querySelector("#btn");
let body = document.querySelector("body");

const getHexNumber = ()=> Math.floor(Math.random()*16).toString(16);


const getRandomHexColor = ()=> '#'+Array.from({length:6}).map(getHexNumber).join('');



btn.addEventListener('click',()=>{
    colorCode.textContent = getRandomHexColor();
    body.style.backgroundColor = getRandomHexColor();
});