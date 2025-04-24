const correct = '12345'; 
const number = '5555'; 
const ExpiryDate = '3/3/29'; 
function login() {
    const card_Number = document.getElementById("cardnumber").value;
    const cvc = document.getElementById("cvc").value;
    const expire = document.getElementById("expire").value
    if (card_Number === correct && cvc === number && expire === ExpiryDate) {
      document.getElementById("atm").style.display = "block";
      alert("succesfully!")
    } 
    else {
      alert("Please Try Again Latter!")
    }
}

let balance = 4000;

function fahad(){
    let amount = prompt("Enetr your withdraw:")
    alert("Withdraw" + amount + "INR")
    if (balance >= amount) {
        balance -= amount;
        document.getElementById('balance').innerHTML = balance;
        alert("Insufficient balance!");
    } 
    else {
        alert("amount is unsufficient");

    }

}