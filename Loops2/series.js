function series(input) {
   let budget = Number(input.shift());
   let n = Number(input.shift());
   let cost = 0;

   for(let i = 1; i <= n; i++) {
       let name = input.shift();
       let price = Number(input.shift());
       if(name === 'Thrones') {
           price = price * 0.5;
       } else if(name === 'Lucifer') {
           price = price * 0.6;
       } else if(name === 'Protector') {
           price = price * 0.7;
       } else if(name === 'TotalDrama') {
           price = price * 0.8;
       } else if(name === 'Area') {
           price = price * 0.9;
       } else {
           price = price;
       }

       cost += price;
   }

   if(budget >= cost) {
       console.log(`You bought all the series and left with ${(budget - cost).toFixed(2)} lv.`);
   } else {
       console.log(`You need ${(cost - budget).toFixed(2)} lv. more to buy the series!`);
   }
}

series([
    '25',         '6',
    'Teen Wolf',  '8',
    'Protector',  '5',
    'TotalDrama', '5',
    'Area',       '4',
    'Thrones',    '5',
    'Lucifer',    '9'
  ])