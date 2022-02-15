document.getElementById('diposit-btn').addEventListener('click', function () {
    // Update Diposit Amount
    const dipositInput = document.getElementById('diposit-input');
    const newDipositAmountText = dipositInput.value;
    const newDipositAmount = parseFloat(newDipositAmountText);

    const dipositTotal = document.getElementById('diposit-total');
    const previousDipositTotalText = dipositTotal.innerText;
    const previousDipositTotal = parseFloat(previousDipositTotalText);

    const newDipositTotal = previousDipositTotal + newDipositAmount;

    dipositTotal.innerText = newDipositTotal

    // Update Balance Amount
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalancetotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalancetotal + newDipositAmount;
    balanceTotal.innerText = newBalanceTotal
    // clear diposit input fild
    dipositInput.value = " "
})

document.getElementById('withdraw-btn').addEventListener('click',function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(withdrawTotalText);
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    
    withdrawTotal.innerText = newWithdrawTotal

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalancetotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalancetotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal

    // clear withdraw input fild
    withdrawInput.value = " "
})