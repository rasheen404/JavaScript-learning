/*

        .map()

        accepts all callback and applies that function 
        to each element of an array and return new array



*/

let numbers = [1,2,3,4,5];

const squares = numbers.map(square);

console.log(squares);


function square(element)
{
    return Math.pow(element,2);
}


let students = ["arun","ankit","john","kenal"];6
const upperCase = students.map(upper);

console.log(upperCase);

function upper(element)
{
    return element.toUpperCase();
}


//-----------filter()----------

//filter() creates a new array by filtering out elements

let num = [1,2,3,4,5,6,7,8,9,10];

const evenNum = num.filter(isEven);

console.log(evenNum);


function isEven(element){
    return element % 2 ===0;
}


//Example 2

let ages = [16,18,25,23,14,30,51];

const adult = ages.filter(isAdult).sort();

console.log(adult);


function isAdult(element){
    return element >=18;
}


//---------------------reduce()---------------

//resuce the elements of an array into single value


const prices = [15,13,50,24,17,10,5];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(previous ,next)
{
    return previous + next;
}

//Example 2


const grades = [55,80,69,74,95,79,83];

const maxGrade = grades.reduce(getmax);

console.log(`${maxGrade.toFixed(2)}`);

function getmax(previous ,next)
{
    return Math.max(previous , next);
}