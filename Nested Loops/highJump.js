function solve(input) {
    let index = 0;
    let target = Number(input[index]);
    index++;
    let jump = input[index];
    index++;
    let attempt = 1;
    let fail = 0;
    let currentTarget = target - 30;

    while(true) {

       if(jump >currentTarget) {
        if(currentTarget >= target) {
            console.log(`Tihomir succeeded, he jumped over ${target}cm after ${attempt} jumps.`);
            return;
        }
           currentTarget += 5;
           fail = 0;
       } else {
           fail++;
           if(fail === 3) {
               console.log(`Tihomir failed at ${currentTarget}cm after ${attempt} jumps.`);
               return;
           }
       }
       jump = input[index];
       index++;
       attempt++;
    }
    
}

solve([
    '250', '225', '224',
    '225', '228', '231',
    '235', '234', '235',
    ''
  ])