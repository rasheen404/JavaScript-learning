/*
        callback = a function that is passed as an argument to another function

        used to handle asynchronous Operation:
        1.Reading a file
        2.Netwoks Request
        3.Interacting with databases

*/

function sum(callback , x, y)
{
    result = x+y;
    callback(result);
}

function displayPage(result)
{
    document.getElementById("myh1").textContent = result;
}

sum(displayPage , 2 ,3);


//---------FOR EACH-------------

/*

    forEach() = method used to iterate over the elements of an array and apply
    a specified function (callback) to each element

    array.forEach(callback);

    element,index,array are provided

*/

let numbers = [1,2,3,4,5];


numbers.forEach(double);
numbers.forEach(display);


function double(element,index,array)
{
    array[index] = element *2;
}

function display(element)
{
    console.log(element);
}


//EXAMPLE 2

let fruits = ["apple","banana","orange"];

fruits.forEach(capitalize);
fruits.forEach(display);

function upper(element,index,array)
{
    array[index] = element.toUpperCase();
}

function capitalize(element,index,array)
{
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(elements)
{
    console.log(elements);
}
