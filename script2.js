/*
variable = a container where it store values.
           Behaves as if it were the value is contains.

     1.Declaration    let x;
     2.Assignment     x = 100;      
*/

//Number DataType
let x;
x = 123;
console.log(x);


let age = 25;
let price;
price = 10.99;

console.log(typeof age);
console.log(`ou are ${age} years old.`);
console.log(`the price is $${price}`);


//String DataType

let FirstName;
FirstName = "java";
let LastName = "Script";

console.log(typeof FirstName);
console.log(`Your First name is ${FirstName}`);
console.log(`Your Last name is ${LastName}`);
console.log(FirstName+LastName);

//Boolean DataType

let online = true;
let forSale = false;

console.log(typeof online);
console.log(`Ankit is in Online : ${online}`);
console.log(`this is not for sale : ${forSale}`);


//Practice

let fullName = 'Ankit';
let ageis = 25;
let isStudent = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `Your age is ${ageis} years old`;
document.getElementById("p3").textContent = `Are you a Student : ${isStudent}`;

