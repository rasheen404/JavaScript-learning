/*

function declaration = define a reusable block that can be do 
                        specific task


function expression = a way to define a function as values or variables


*/

const numbers = [1,2,3,4,5];

const squares = numbers.map(
    function(element)
        {
            return Math.pow(element , 2);
        }
                            );



console.log(squares);


/*
previous way to written above program is

let numbers = [1,2,3,4,5];

const squares = numbers.map(square);

console.log(squares);


function square(element)
{
    return Math.pow(element,2);
}


*/

