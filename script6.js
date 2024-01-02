//Const = a variable that can't be change.


const PI = 3.14;
let radius;
let result;
document.getElementById("mySubmit").onclick = function(){

    radius =  document.getElementById("myradius").value; 
    radius = Number(radius);
    result = 2 * PI * radius;
    document.getElementById("myP").textContent = `The Perimeter of Circle is ${result}`;
}
