function solve(input) {
   let index = 0;
   let honeyTarget = Number(input[index]);
   index++;

   let honeyCount = 0;

   let command = input[index];
   index++;

   while(command !== 'Winter has come') {
       let name = command;
       let honey = Number(input[index]);
       index++;
       for(let i = 1; i <= 6; i++) {
          if(honey >= 0) {
              honeyCount += honey;
          } else {
              honeyCount -= honey;
          }
          if(honeyCount < 0) {
            console.log(`${name} was banished for gluttony`);
       }

      }
       honeyCount += honey;
       break;
   }
    if(honeyCount >= honeyTarget) {
        console.log(`Well done! Honey surplus ${(honeyCount - honeyTarget).toFixed(2)}.`);
    } else {
        console.log(`Hard Winter! Honey needed ${(honeyTarget - honeyCount).toFixed(2)}.`);
    }
}

solve([
    '1000',   'Maya',
    '-50',    '-10',
    '-20.70', '20.40',
    '10.30',  '40',
    'Yama',   '50',
    '10',     '20',
    '30',     '100',
    '100',    'Winter has come'
  ]
  )