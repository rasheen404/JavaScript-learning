/*
    IF STATEMENT 

    if a condition is true execute the block of code 

    if not true then do something.
*/



/*
//IF STATEMENT

let age = 25;

if(age>=18)
{
    console.log("You are eligible.")
}
else{
    console.log("Sorry, you are not eligible.")
}

//Example 2
let isStudent = true;

if(isStudent)
{
    console.log("You are a Student");
}
else{
    console.log("Your are not a Student");
}

*/


const label = document.getElementById("myText");
const button = document.getElementById("button");
const result = document.getElementById("myp")

let age;

button.onclick = function()
{
    age = label.value;
    age = Number(age);
    if(age >= 100)
    {
        window.alert(`You are too old to Enter to this Site.`);
    }
    else if(age == 0)
    {
        window.alert(`You can't enter.you were just Born`);
    }
    else if(age >= 18)
    {
        window.alert(`You are enough old to enter the site`);
    }
    else if(age < 0)
    {
        window.alert(`Age can't be below zero.`);
    }
    else
    {
        window.alert("You must be 18+ to enter the site.");
    }
}