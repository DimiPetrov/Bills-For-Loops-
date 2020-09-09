function solve(input) {
    let eggsInStore = Number(input[0]);
    let index = 1;
    let currentAction = input[index];
    let eggsCount = Number(input[index + 1]);
    let eggsSold = 0;
  
    while(currentAction !== 'Close') {
      if(currentAction === 'Buy') {
          eggsInStore -= eggsCount; 
          eggsSold += eggsCount;
            if(eggsInStore < 0) { 
              console.log(`Not enough eggs in store!`);
              console.log(`You can buy only ${eggsInStore + eggsCount}.`);
              return;
            }  
        } else if(currentAction === 'Fill') {
          eggsInStore += eggsCount;
        }

      index += 2;
      currentAction = input[index];
      eggsCount = Number(input[index + 1]);
    }

      if(currentAction === 'Close') {
          console.log(`Store is closed!`);
          console.log(`${eggsSold} eggs sold.`);
      }

}

solve([
    '20', 'Fill',
    '30', 'Buy',
    '15', 'Buy',
    '20', 'Close'
  ]
  )