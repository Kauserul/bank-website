document.getElementById('deposit-btn').addEventListener("click", function(){
    const infoDeposit = document.getElementById('deposit-info');
    const newDeposit = parseFloat(infoDeposit.value);
    
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);
    
    const cureentDepositTotal = previousDepositTotal + newDeposit;
    depositTotalElement.innerText = cureentDepositTotal;



    const cureentBalance = document.getElementById('balance-total');
    const previouseBalanceTotal = parseFloat(cureentBalance.innerText);

    const cureentBalanceTotal = previouseBalanceTotal + newDeposit;
    cureentBalance.innerText = cureentBalanceTotal;



    infoDeposit.value = '';
    
})