/*
            LOGICAL OPERATOR

            && - AND

            || - OR

            !  - NOT


*/

const text = document.getElementById("myText");
const button = document.getElementById("button");
const result = document.getElementById("myp")

let age;

button.onclick = function()
{
    age = text.value;
    age = Number(age);
if(age != 0 && age < 18)
{
    result.textContent = "Not Eligible.";
}
else if(age >= 18 || age <= 60)
{
    result.textContent = "Eligible";
}
}


/* 
            EQUALITY OPERATOR

    =       - Assignment operator 
    ==      - Comparison Operator (Compare  values are equal)
    ===     - Strict Equality Operator (Compare value and dataType are Equal)
    !=      - NOT Equal to Operator
    !==     - Strict Not Equal Operator



*/