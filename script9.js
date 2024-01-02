/*
    Checked  = property that determines the 
    checked state of an html checkbox or radio button.
*/



const myCheckBox = document.getElementById("myCheckBox");
const visa = document.getElementById("visa");
const masterBtn = document.getElementById("masterBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const Subscribe = document.getElementById("Subscribe");
const payment = document.getElementById("payment");


mySubmit.onclick = function(){
    if(myCheckBox.checked)
    {
        Subscribe.textContent = `Thanks for Subscribe.`;
    }
    else{
        Subscribe.textContent = 'Your are Not subscribed,Please Subscribe';
    }

    if(visa.checked)
    {
        payment.textContent = `You are paying with Visa.`;
    }
    else if(masterBtn.checked)
    {
        payment.textContent = `You are paying with MasterCard.`;
    }
    else if(paypalBtn.checked)
    {
        payment.textContent = `You are paying with PayPal.`;
    }
    else{
        window.alert('Please select a Payment Mode');
    }
}