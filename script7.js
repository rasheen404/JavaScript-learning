

let random;
let min =1;
let max = 100;

document.getElementById("myGenerate").onclick = function()
{
random = Math.floor(Math.random()* max) + min;
document.getElementById("myp").textContent = `Your Random Number is ${random}`;
}