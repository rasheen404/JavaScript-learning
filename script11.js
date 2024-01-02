/*
        STRING METHOD

    string method allow you to manipulate and work with string.
*/

let userName = "javaScript";

//charAt = give a single character

console.log(userName.charAt(0));

//indexOf() return the first occurance of the character

console.log(userName.indexOf('a'));

//lastIndexOf() return the last occurance of the character
console.log(userName.lastIndexOf('a'));

//Length will return the length of the string
console.log(userName.length);

//trim() remove the space
let demo = "hello  "
demo = demo.trim();
console.log(demo);

//toUpperCase()
console.log(userName.toUpperCase());

//toLowerCase()
console.log(userName.toLowerCase());

//repeat() to repeat the string
console.log(userName.repeat(3));

//startWith() to check and return boolean

let password = " password";
password = password.startsWith(" ");

if(password=true)
{
    console.log("you can't create password with starting space.");
}
else
{
    console.log("Password created successfully.");
}

//endsWith() to check and return boolean

let lastname = "username ";
lastname = lastname.endsWith(" ");

if(lastname=true)
{
    console.log("you can't create username by ending with space");
}
else
{
    console.log("username created successfully.");
}



//includes() to check and return boolean
let name = "JavaScript";
name = name.includes(" ");

if(name=false)
{
    console.log("it include space");
}
else
{
    console.log("it deosn't include space");
}

//replaceAll() will replace all elements

let phoneNumber = "123-456-789";

phoneNumber = phoneNumber.replaceAll("-","");

console.log(phoneNumber);

//padStart() we can add character (at starting) to complete the given length of string

phoneNumber = phoneNumber.padStart(15, "0");
console.log(phoneNumber);


/*
padEnd() we can add character (at ending) to complete the given length of string

let addNo = 123;
addNo = addNo.padEnd(0);
console.log(addNo);

*/

/*   
           STRING STRICING
           creating a substring from a portion of another string

           string.slice(Start, end);
*/

let fullName ="Manoj Kumar";

let firstName = fullName.slice(0, 5);
console.log(firstName);

let lastName = fullName.slice(6, 11);
console.log(lastName);

let firstChar = fullName.slice(0, 1);
console.log(firstChar);

let lastChar = fullName.slice(-1);
console.log(lastChar);

//splice by space

let fullName1 = "Java Script";
let firstName1 = fullName1.slice(0, fullName1.indexOf(" "));
console.log(firstName1);



let lastName1 = fullName1.slice(fullName1.indexOf(" ")+1);
console.log(lastName1);