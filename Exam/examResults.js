function solve(input) {
    let index = 0;
    let name = input[index];
    index++;

    let score = 0;
    let finalScore = 0;

   while(name !== 'Midnight') {
       let isCheating = false;
        for(let i = 0; i < 6; i++) {
        let points = Number(input[index]);
           index++;
           score += points;
           if(points < 0) {
               isCheating = true;
               console.log(`${name} was cheating!`);
               break;
           }
       }
            //console.log(`${name} - ${score}`);
       if(isCheating === false) {
       finalScore = Math.floor(score / 600 * 100);
            //console.log(`${name} - ${finalScore}`);
       finalScore = (finalScore * 0.06).toFixed(2);
       if(finalScore > 5) {
        console.log(`===================`);
        console.log(`| CERTIFICATE |`);
        console.log(`| ${finalScore}/6.00 |`);
        console.log(`===================`);
        console.log(`Issued to ${name}`);
        } else {
           if(finalScore < 3) {
           finalScore = 2.00;
          }
            console.log(`${name} - ${finalScore}`);
        }
    }
        name = input[index];
        index++;
        score = 0;
   }

}

solve([
    'George', '100',   '100',
    '100',    '100',   '40',
    '0',      'John',  '10',
    '-1',     'Peter', '100',
    '100',    '100',   '100',
    '100',    '70',    'Midnight'
  ])