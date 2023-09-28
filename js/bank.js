document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const previousDeposit = document.getElementById('previous-deposit');
    const previousDepositAmountString = previousDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);

    previousDeposit.innerText = newDepositAmount + previousDepositAmount;
// add balance
    const previousBalance = document.getElementById('previous-balance-amount');
    const previousBalanceAmountString = previousBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);

    const currentBalanceAmount = previousBalanceAmount + newDepositAmount;
    previousBalance.innerText = currentBalanceAmount;
   
       
    depositField.value ='';
})