/*
        WHILE LOOP
        repeat a block of code while a condition is true

*/

/*
const myp = document.getElementById("myp");
let loggedIn = false;
let username;
let password;

while(!loggedIn)
{
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");
    if(username === "admin" && password === "admin")

    {
        loggedIn = true;
        myp.textContent = "You are logged in.";
    }
    else{
        console.log("Invalid credentials,please try again");
    }
}


*/


/*
//----DO WHILE --------------
const myp = document.getElementById("myp");
let loggedIn = false;
let username;
let password;


do{
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");
    if(username === "admin" && password === "admin")

    {
        loggedIn = true;
        myp.textContent = "You are logged in.";
    }
    else{
        console.log("Invalid credentials,please try again");
    }
}while(!loggedIn)


*/


//----------FOR LOOPS-----------

//for loop repeat some code a LIMITED times

for(let i = 1;i<5;i++)
{
    console.log(i);
}
console.log(`------------i loop Ended----------------`);



for(let j = 1;j<=10;j+=2)
{
    console.log(j);
}

console.log(`------------j loop Ended----------------`);


for(let k = 5;k>0;k--)
{
    console.log(k);
}
console.log(`------------k loop Ended----------------`);


for(let z = 10;z>0;z -= 2)
{
    console.log(z);
}
console.log(`------------k loop Ended----------------`);


//--------------CONTINUE---------
for(let a = 1;a<=5;a++)
{
    if(a==3)
    {
        //continue will skip this iteration
        continue;
    }
    else{
    console.log(a);
    }
}
console.log(`------------a loop Ended----------------`);


//--------------BREAK---------

for(let b = 1;b<=5;b++)
{
    if(b == 3)
    {
        //terminate the loop
        break;
    }
    else{
    console.log(b);
    }
}
console.log(`------------b loop Ended----------------`);
