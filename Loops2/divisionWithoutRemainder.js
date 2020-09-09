function solve(input) {
   let n = Number(input.shift());

   let p1 = 0;
   let p2 = 0;
   let p3 = 0;

   let p1Percentage = 0;
   let p2Percentage = 0;
   let p3Percentage = 0;

   for(let i = 1; i<= n; i++) {
       let currentNum = input.shift();
       if(currentNum % 2 === 0) {
           p1++;
       } if(currentNum % 3 === 0) {
           p2++;
       } if(currentNum % 4 === 0) {
           p3++;
       }
   }

   p1Percentage = (p1 / n * 100).toFixed(2);
   p2Percentage = (p2 / n * 100).toFixed(2);
   p3Percentage = (p3 / n * 100).toFixed(2);

   console.log(`${p1Percentage}%`);
   console.log(`${p2Percentage}%`);
   console.log(`${p3Percentage}%`);

}

solve([ '3', '3', '6', '9' ])