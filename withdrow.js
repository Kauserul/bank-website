document.getElementById('withrow-btn').addEventListener('click', function(){

    const withdraw = document.getElementById('withdrow-info');
    const withdrawAmount = parseFloat(withdraw.value);
       

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdraw = parseFloat(withdrawTotal.innerText);
    
    
    const cureentBalance = document.getElementById('balance-total');
    const previousBalance = cureentBalance.innerText;
    
    if(withdrawAmount > previousBalance){
        alert('you can not money');
        return;
    }
    
    const currentWithdrawTotal = withdrawAmount + previousWithdraw;
    withdrawTotal.innerText = currentWithdrawTotal;
    
    const newCureentBalacne = previousBalance - withdrawAmount;
    cureentBalance.innerText = newCureentBalacne;

    withdraw.value = '';
})