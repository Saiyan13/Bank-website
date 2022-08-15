document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositeField = document.getElementById('deposite-field');
    const depositeAmount = depositeField.value;
    const depositeTotalElement = document.getElementById('total-deposite');
    const depositeTotal = depositeTotalElement.innerText;
    depositeTotalElement.innerText = depositeAmount 
})