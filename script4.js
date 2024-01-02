//Accept JavaScript User INPUT

/*
1. EASY WAY : window prompt
2.PROFFESSIONAL WAY : HTML TEXTBOX
*/

//Using window Prompt

/*

let username;
username = window.prompt("What is your username ?")

console.log(username);

*/


//Using HTML TextBox

let firstname;
let lastname;
document.getElementById("myButton").onclick = function(){
    firstname = document.getElementById("FirstName").value;

    lastname = document.getElementById("LastName").value;

    document.getElementById("myH1").textContent = `Hello ${firstname+lastname}`;

    console.log(`Your full name is ${firstname+lastname}`);
}