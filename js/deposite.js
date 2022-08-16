document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositeField = document.getElementById('deposite-field');

    const depositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(depositeAmountString);

    const depositeTotalElement = document.getElementById('total-deposite');

    const previousdepositeTotalString = depositeTotalElement.innerText;
    const previousdepositeTotal = parseFloat(previousdepositeTotalString);


    const currentDepositeTotal = previousdepositeTotal + newDepositeAmount;

    depositeTotalElement.innerText = currentDepositeTotal; 

    const balanceTotalElement =  document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    depositeField.value = '';
})