document.getElementById('btn-deposite').addEventListener('click', function() {
    const depositeField = document.getElementById('deposite-field');

    const newdepositeAmountString = depositeField.value;
    const newdepositeAmount = parseFloat(newdepositeAmountString);
    // console.log(depositeAmount);


    const depositeElement = document.getElementById('deposite-total');
    const privousdepositeTotalString = depositeElement.innerText;
    const privousdepositeTotal = parseFloat(privousdepositeTotalString);
    // console.log(depositeTotal);

    const currentDeposite = privousdepositeTotal + newdepositeAmount;

    depositeElement.innerText = currentDeposite;

    const bananceTotalAmount = document.getElementById('balance-total');
    const previousBalanceString = bananceTotalAmount.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceString);
    const currentBalanceTotal = previousBalanceTotal + newdepositeAmount;

    bananceTotalAmount.innerText = currentBalanceTotal;

    depositeField.value = '';
})