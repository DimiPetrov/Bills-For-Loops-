function solve(input) {
   let tournaments = Number(input.shift());
   let allPoints = Number(input.shift());
   let currentPoints = 0;
   let points = 0;
   let stage = input.shift();
   let wins = 0;

   for(let i = 1; i <= tournaments; i++) {
       if(stage === 'W') {
           points = 2000;
           wins++;
       } else if(stage === 'F') {
           points = 1200;
       } else if(stage === 'SF') {
           points = 720;
       }

       allPoints += points;
       currentPoints += points;
       stage = input.shift();
   }
     
   let averagePoints = currentPoints / tournaments;
   let winsPercent = wins / tournaments * 100;

     console.log(`Final points: ${allPoints}`);
     console.log(`Average points: ${Math.floor(averagePoints)}`);
     console.log(`${winsPercent.toFixed(2)}%`);
}

solve(['4', '750', 'SF', 'W', 'SF', 'W'])