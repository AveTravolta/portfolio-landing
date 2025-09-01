const generateButton = document.getElementById("generateButton");
const resultLabel1 = document.getElementById("resultLabel1");
const resultLabel2 = document.getElementById("resultLabel2");
const resultLabel3 = document.getElementById("resultLabel3");
const min = 1
const max = 100
let randomNum1;
let randomNum2;
let randomNum3;

generateButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    resultLabel1.textContent = randomNum1; 
    resultLabel2.textContent = randomNum2; 
    resultLabel3.textContent = randomNum3; 
}