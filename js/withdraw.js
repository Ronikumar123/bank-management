document.getElementById('btn-withdraw').addEventListener('click', function() {

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    console.log(newWithdrawAmount);

    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    const withdrawTotalAmount = document.getElementById('withdraw-total');
    const previousWithdrawString = withdrawTotalAmount.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawString);



    const bananceTotalAmount = document.getElementById('balance-total');
    const previousBalanceString = bananceTotalAmount.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceString);



    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Insuficient balance');
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalAmount.innerText = currentWithdrawTotal;
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    bananceTotalAmount.innerText = currentBalanceTotal;



})