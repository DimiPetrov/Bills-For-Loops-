function solve(input) {
   let h = Number(input.shift());
   let w = Number(input.shift());
   let nonPaintArea = Number(input.shift());
   let walls = (h * w * 4) * (100 - nonPaintArea) / 100;
   let paintedWalls = 0;
   let command = input.shift();

   while(command !== 'Tired') {
       let paint = Number(command);
       paintedWalls += paint;
       if(paintedWalls >= walls) {
           break;
       }
       command = input.shift();
   }

   if(command === 'Tired') {
       console.log(`${Math.ceil(walls - paintedWalls)} quadratic m left.`);
   } else if(paintedWalls > walls) {
       console.log(`All walls are painted and you have ${Math.ceil(paintedWalls - walls)} l paint left!`);
   } else if(paintedWalls = walls) {
       console.log(`All walls are painted! Great job, Pesho!`);
   }
}

solve([ '3', '5', '10', '2', '3', '4', 'Tired!' ])