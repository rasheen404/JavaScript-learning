/*
        FUNCTIONS()

        declare a block of code once and call when ever you want.



*/

//declaring a function
function happyBirthday()
{
    console.log(`happy Birthday to You..!`);
}

//calling the function
happyBirthday();


//------ARGUMENTS/PARAMETERS----------

function details(username,age)
{
    console.log(`Your name is ${username}.`);
    console.log(`your age is ${age}.`);
}

details(`JavaScript`,25);

//-------------RETURN---------

function add(x,y)
{
    result = x+y;
    return result;
}

let answer = add(3,2);
console.log(`answer is ${answer}`);