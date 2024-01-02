/*
    TERNARY OPERATOR

    A shortcut to if{} and else{} statements helps to assign a variable
    based on a condition

    condition ? codeIfTrue : codeifFalse;

let age = 21;

let message = age>=18 ? "You are an adult" : "You are an minor";
console.log(message);


*/


//SWITCH


const mytext = document.getElementById("mytext");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
let day;
submit.onclick = function()
{
    day = mytext.value; 
    day = Number(day);

    switch(day)
    {
        case 1:
            result.textContent = `It is Sunday`;
            break;
        case 2:
            result.textContent = `It is Monday`;
            break;
        case 3:
            result.textContent = `It is Tuesday`;
            break;
        case 4:
            result.textContent = `It is Wendesday`;
            break;
        case 5:
            result.textContent = `It is Thursday`;
            break;
        case 6:
            result.textContent = `It is Friday`;
            break;
        case 7:
            result.textContent = `It is Saturday`;
            break;
        default:
            result.textContent = `Please enter a valid Number.`;
                        
    }
}
