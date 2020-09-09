function solve(input) {
   let income = Number(input[0]);
   let months = Number(input[1]);
   let costs = Number(input[2]);

   let extraCosts = income * 0.3;
   let savings = income - (costs + extraCosts);
   let percentSavings = savings /income * 100;
   let totalSavings = savings * months;

   console.log(`She can save ${percentSavings.toFixed(2)}%`);
   console.log(`${totalSavings.toFixed(2)}`);
 
}

solve([ '2050', '3', '800' ])