function cleverLily(age, washingMachine, toyPrice) {
  age = Number(age);
  washingMachine = Number(washingMachine);
  toyPrice = Number(toyPrice);

  let toysCount = 0;
  let savedMoney = 0;
  let lastMoneyGift = 0;

  for(let year = 1; year <= age; year++) {
      if(year % 2 !== 0) {
          toysCount++;
      } else {
         savedMoney += (lastMoneyGift + 9);
         lastMoneyGift += 10;
      }
  }
  let toyMoney = toysCount * toyPrice;
  let totalSavedMoney = savedMoney + toyMoney;

  if(totalSavedMoney >= washingMachine) {
      N = totalSavedMoney - washingMachine;
      console.log(`Yes! ${N.toFixed(2)}`);
  } else {
      M = washingMachine - totalSavedMoney;
      console.log(`No! ${M.toFixed(2)}`);
  }
}

cleverLily(21, 1570.98, 3)