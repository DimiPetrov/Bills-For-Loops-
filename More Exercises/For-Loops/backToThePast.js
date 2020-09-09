function solve(input) {
    let sum = Number(input.shift());
    let lastYear = Number(input.shift());
    let age = 18;

    for(let i = 1800; i <= lastYear; i++) {
        age++;
        if(i % 2 === 0) {
            sum -= 12000;
        }else {
            sum -= 12000 + 50 * age;
        }
    }

    if(sum >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${sum.toFixed(2)} dollars left.`);
    }else {
        console.log(`He will need ${Math.abs(sum.toFixed(2))} dollars to survive.`);
    }
}

solve([ '50000', '1802' ])