/* 
Type Conversion

type conversion is changing the datatype from one to another datatype

(String,Number,Boolean)
*/

let x = "123";
let y = "Hello";
let z = "true";

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);