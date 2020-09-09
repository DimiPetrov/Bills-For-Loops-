function solve(input) {
    let budget = Number(input[0]);
    let beachTowel = Number(input[1]);
    let discount = Number(input[2]);

    let umbrella = beachTowel * 2 / 3;
    let flipflops = umbrella * 0.75;
    let bag = (beachTowel + flipflops) / 3;

    let cost = (beachTowel + umbrella + flipflops + bag);
    let sum = cost - cost / 100 * discount;
    let difference = budget - sum;

    if(difference >= 0) {
        console.log(`Annie's sum is ${sum.toFixed(2)} lv. She has ${difference.toFixed(2)} lv. left.`);
    } else {
      difference = Math.abs(difference);
        console.log(`Annie's sum is ${sum.toFixed(2)} lv. She needs ${difference.toFixed(2)} lv. more.`);
    }
}

solve([ '40', '15', '5', '' ])