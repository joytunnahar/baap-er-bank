document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const previousWithdraw = document.getElementById('previous-withdraw');
    const previousWithdrawAmountString = previousWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    

    previousWithdraw.innerText = newWithdrawAmount + previousWithdrawAmount;
 

 
// add balance
    const previousBalance = document.getElementById('previous-balance-amount');
    const previousBalanceAmountString = previousBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);

   
    withdrawField.value ='';
    if(newWithdrawAmount>previousBalanceAmount){
        alert('Not enough amount to withdraw');
        return;
    }  
    const currentBalanceAmount = previousBalanceAmount - newWithdrawAmount;
    previousBalance.innerText = currentBalanceAmount;
   
})