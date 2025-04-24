



let card_number = +prompt("Enter your card nummber");
let cvc_number = +prompt("Enter your cvc number");
let expiredate = prompt("Enter your card expiredate");

if(card_number === 12345 && cvc_number === 5555 && expiredate === "3/3/29"){
    //alert("successfully activated")

    balance = +prompt("Enter your balance");
    amount = +prompt("Enter any amount you want to credit");
    

    if(amount < balance){
        let remaining_balance = balance - amount
        alert("transaction succesfully! remmaining balance: RS" + remaining_balance );   
    }
    
    else if(amount > balance){
        alert("amount is unsufficient");
    }
    else if(amount === balance){
        alert("transaction succesfull! your balance is now 0" );
    }
}

else if(card_number !== 12345){
    alert("unsuccesfull: Incorrect card number");
}
else if(cvc_number !== 5555){
    alert("unsuccesfull: Incorrect cvc number");
}
else if(expiredate !== "3/3/29"){
    alert("unsuccesfull: Incorrect expirydate");
}

