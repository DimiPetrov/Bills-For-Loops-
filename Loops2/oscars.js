function oscars(input) {
   let name = input.shift();
   let totalPoints = Number(input.shift());
   let actors = Number(input.shift());

   for(let i = 1; i <= actors; i++) {
       let actor = input.shift();
       let testPoints = Number(input.shift());
       totalPoints += (actor.length * testPoints) / 2;

       if(totalPoints > 1250.5) {
          break;
       }
   }

     if(totalPoints > 1250.5) {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
     } else {
        console.log(`Sorry, ${name} you need ${(1250.5 - totalPoints).toFixed(1)} more!`);
     }
}

oscars([
    'Sandra Bullock', '340',
    '5',              'Robert De Niro',
    '50',             'Julia Roberts',
    '40.5',           'Daniel Day-Lewis',
    '39.4',           'Nicolas Cage',
    '29.9',           'Stoyanka Mutafova',
    '33',             ''
  ])