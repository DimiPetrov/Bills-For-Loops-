function solve(input) {
    let moves = Number(input.shift());
    let points = 0;
    let upTo9 = 0;
    let upTo19 = 0;
    let upTo29 = 0;
    let upTo39 = 0;
    let upTo50 = 0;
    let invNum = 0
    

    for(i = 1; i <= moves; i++) {
        let num = Number(input.shift());
        if(num >= 0 && num <= 9) {
            points += num * 0.2;
            upTo9++;
        } else if(num >= 10 && num <= 19) {
            points += num * 0.3;
            upTo19++;
        } else if(num >= 20 && num <= 29) {
            points += num * 0.4;
            upTo29++;
        } else if(num >= 30 && num <= 39) {
            points += 50;
            upTo39++;
        } else if(num >= 40 && num <= 50) {
            points += 100;
            upTo50++;
        } else {
            points /= 2;
            invNum++;
        }
    }
    console.log(points.toFixed(2));
    console.log(`From 0 to 9: ${(upTo9 / moves * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(upTo19 / moves * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(upTo29 / moves * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(upTo39 / moves * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(upTo50 / moves * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invNum / moves * 100).toFixed(2)}%`);
}

solve([
    '10',  '43', '57',
    '-12', '23', '12',
    '0',   '50', '40',
    '30',  '20'
  ])