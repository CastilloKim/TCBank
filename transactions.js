class transaction{
    constructor(date, description, type, amount) {
      this.date = date;
      this.description = description;
      this.type = type;
      this.amount = amount;
    }
  }
  
  let transaction1 = new transaction('March 15, 2022','Boba Express','Debit','$10.45');
  let transaction2 = new transaction('April 27, 2022','Best Buy','Credit','$107.86');
  let transaction3 = new transaction('May 6, 2022','Walmart','Credit','$52.97');
  let transaction4 = new transaction('May 21, 2022','Target','Credit','$67.94');
  let transaction5 = new transaction('June 6, 2022','Amazon','Debit','$94.82');
  let transaction6 = new transaction('July 17, 2022','Chick Fil-A','Credit','$10.37');
  let transaction7 = new transaction('August 3, 2022','Shell','Debit','$50.67');
  let transaction8 = new transaction('September 28, 2022','Amazon','Credit','$84.37');
  let transaction9 = new transaction('October 22, 2022','Spirit Halloween','Debit','$37.56');
  let transaction10 = new transaction('November 25, 2022','Whole Foods','Debit','$35.80');
  
  var transactions = [transaction1, transaction2, transaction3, transaction4, transaction5, transaction6, transaction7, transaction8, transaction9, transaction10];
  
  console.log(transactions);

const deposit_btn = document.getElementById('deposit-btn');
deposit_btn.addEventListener('click', function(){
    const depositStringToInt = getInputNumb("deposit-amount");
    updateSpanTest("current-deposit", depositStringToInt);
    updateSpanTest("current-balance", depositStringToInt);

    document.getElementById('deposit-amount').value = "";
})

const withdraw_btn = document.getElementById('withdraw-btn');
withdraw_btn.addEventListener('click', function(){
    const withdrawNumb = getInputNumb("withdraw-amount");
    updateSpanTest("current-withdraw", withdrawNumb);
    updateSpanTest("current-balance", -1 * withdrawNumb);

    document.getElementById('withdraw-amount').value = "";
})

function getInputNumb(idName){
    const amount = document.getElementById(idName).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanTest(idName, addedNumber){
    const current = document.getElementById(idName).innerText;
    const currentStringToInt = parseFloat(current);
    const total = currentStringToInt + addedNumber;

document.getElementById(idName).innerText = total;
}
