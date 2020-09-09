function solve(input) {
   let people = Number(input.shift());
   let products = 0;
   let price = 0;
   let totalPrice = 0;

   for(let i = 1; i <= people; i++) {
       let command = input.shift();

       while(command !== 'Finish') {
           switch(command) {
               case 'basket': price += 1.50; products++; break;
               case 'wreath': price += 3.80; products++; break;
               case 'chocolate bunny': price += 7; products++; break;
           }
           command = input.shift();
           if(products % 2 === 0) {
               price *= 0.8;
           }
       }
       if(command === 'Finish') {
           totalPrice += price;
           console.log(`You purchased ${products} items for ${price.toFixed(2)} leva.`);
       }
   }
   let averagePrice = (totalPrice / people).toFixed(2);
   console.log(`Average bill per client is: ${averagePrice} leva.`);
}

solve([
    '1',
    'basket',
    'wreath',
    'chocolate bunny',
    'wreath',
    'basket',
    'chocolate bunny',
    'Finish'
  ])