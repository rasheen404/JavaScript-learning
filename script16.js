/*
        VARIABLE SCOPE
        where the variable is recognised and accessible
        (local vs global)
        
        local - variable declared inside a function
        global - variable declared outside a function

*/

/*
        -----------ARRAY---------------

        a variable like structure that can hold more than 1 value

*/

let fruits = ["apple","banana","orange"];
console.log(fruits);

//to access indivitual elements
console.log(fruits[0]);

fruits[2] = "coconut";
console.log(fruits);

//Array methods

fruits.push("orange"); //add to last
console.log(fruits);


fruits.pop(); //remove last
console.log(fruits);

fruits.unshift("mango"); //add to Begining
console.log(fruits);

fruits.shift(); //remove begining
console.log(fruits);

//length of Array
console.log(fruits.length);

//indexOf() for element index
console.log(fruits.indexOf("banana"));

for(let i= 0;i< fruits.length;i++)
{
    console.log(`${fruits[i]} is the ${i} element in array.`)
}

//shortcut of loop to display array

for(let fruit of fruits)
{
    console.log(`${fruit} is the  element in array.`)
}

//sort() to sort the array

let num = [5,1,7,3,2,6,4];
num.sort();
console.log(num);

//sort().reverse() to sort the array in reverse
num.sort().reverse();
console.log(num);


//------------------------------2D Array----------------------------

/*
        multi-dimentional array that stores a matrix of data in rows and column
        useful for games,spreadsheet etc

        [X, O, X]
        [O, X, X]
        [O, X, O]

*/


const matrix = [[1,2,3],
                [4,5,6],   
                [7,8,9]];

for(let row of matrix)
{
    const rowString = row.join(' ');
    console.log(rowString);
}

//------------------------------SPREAD OPERATOR----------------------------

/*
      allows and iterable such as an array or string to be expanded.
      into seperate element
      (unpacks the element)

      represented by ...

*/

let numbers = [1,2,3,4,5];

let maximum = Math.max(...numbers);
console.log(maximum);

let minimum = Math.min(...numbers);
console.log(minimum);


let username = "javaScript";
let letters = [...username];
console.log(letters);


//------------------------------Rest OPERATOR----------------------------

/*
      spread = expands an array into seperate elements
      rest = bundle seperate element into array

      represented by (...rest)

*/

const food1 ="biriyani";
const food2 ="chappathi";
const food3 ="meals";
const food4 ="burger";

function fridge(...foods)
{
    console.log(foods);
}

fridge(food1,food2,food3,food4);

