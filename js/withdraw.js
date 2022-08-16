// Add eventLiestener with withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
//    get the withdraw amount from input field
const withdrawField = document.getElementById('withdraw-field');
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString)

// get previous withdraw amount
const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

// calculate total withdraw amount
const currtentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount

// set total withdraw amount
withdrawTotalElement.innerText = currtentWithdrawTotal;

// clear the input field
withdrawField.value = '';

// get the previous Balance total
const balanceTotalElement = document.getElementById('balance-total')
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// calculate  new balance total and set the new balance total
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotalElement.innerText = newBalanceTotal; 
})