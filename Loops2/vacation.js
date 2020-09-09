function vacation(input) {
   let vacationExpenses = Number(input[0]);
   let amount = Number(input[1]);

   let index = 2;
   let days = 0;
   let spendDays = 0;

   let currentAction = input[index];
   let currentAmount = Number(input[index + 1]);

   while((currentAction !== undefined) && (spendDays <= 5)) {
       if(currentAction === 'spend') {
          amount = Math.max((amount - currentAmount), 0);
          spendDays++;
       } else if(currentAction === 'save') {
           amount += currentAmount;
           spendDays = 0;
       }

       index += 2;
       days++;
       currentAction = input[index];
       currentAmount = Number(input[index + 1]);
   }

   if((spendDays === 5) || (amount < vacationExpenses) ) {
      console.log(`You can't save the money.`);
      console.log(`${days}`);
   } else if(amount >= vacationExpenses) {
       console.log(`You saved the money for ${days} days.`);
   }
}

vacation([
    '250',   '150',
    'spend', '50',
    'spend', '50',
    'save',  '100',
    'save',  '100'
  ])