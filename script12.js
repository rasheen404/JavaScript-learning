/*
        METHOD CHAINING

        Calling one methon after another in
        continous line of code

*/

let username = window.prompt("Enter the username");
//------- NO METHOD CHAINING -------------

/*
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraletter = username.slice(1);
extraletter = extraletter.toLowerCase();
username = letter+extraletter;

console.log(username);

*/

//--------- METHOD CHAINING -------------

username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();
console.log(username);
