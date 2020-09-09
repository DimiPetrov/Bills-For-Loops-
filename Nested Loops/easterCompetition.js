function solve(input) {
   let bakes = Number(input.shift());
   let chef = "";
   let maxSum = 0;

   for(let i = 1; i <= bakes; i++) {
       let name = input.shift();
       let points = input.shift();
       let sum = 0;

       while(points !== "Stop") {
           sum += points;
           points = Number(input.shift());
       }

       console.log(`${name} has ${sum} points.`);

       if(sum > maxSum) {
           maxSum = sum;
           chef = name;
           console.log(`${name} is the new number 1!`);
       }

   }

   console.log(`${chef} won competition with ${maxPoints} points!`);
}

solve([
    '3',      'Chef Manchev',
    '10',     '10',
    '10',     '10',
    'Stop',   'Natalie',
    '8',      '2',
    '9',      'Stop',
    'George', '9',
    '2',      '4',
    '2',      'Stop'
  ]
  )