function solve(input) {
   let n = Number(input.shift());
   let name = input.shift();

   let hearthstoneCounter = 0;
   let forniteCounter = 0;
   let overwatchCounter = 0;
   let othersCounter = 0;

   for(let i = 1; i <= n; i++) {
       if(name === 'Hearthstone') {
           hearthstoneCounter++;
       } else if(name === 'Fornite') {
           forniteCounter++;
       } else if(name === 'Overwatch') {
           overwatchCounter++;
       } else {
           othersCounter++;
       }
       name = input.shift();
   }

   console.log(`Hearthstone - ${(hearthstoneCounter / n * 100).toFixed(2)}%`);
   console.log(`Fornite - ${(forniteCounter / n * 100).toFixed(2)}%`);
   console.log(`Overwatch - ${(overwatchCounter / n * 100).toFixed(2)}%`);
   console.log(`Others - ${(othersCounter / n * 100).toFixed(2)}%`);

}

solve([ '3', 'Hearthstone', 'Diablo 2', 'Star Craft 2' ])