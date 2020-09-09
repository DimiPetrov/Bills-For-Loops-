function solve(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);
    let totalSum = 0;

    for(let i = 1; i <= days; i++) {
        let daySum = 0;
        for(let j = 1; j <= hours; j++) {
            if(i % 2 === 0 && j % 2 !== 0) {
                daySum += 2.50;
            } else if(i % 2 !== 0 && j % 2 === 0) {
                daySum += 1.25;
            } else {
                daySum += 1;
            }
        }
        console.log(`Day: ${i} - ${daySum.toFixed(2)} leva`);
        totalSum += daySum;
    }   
       console.log(`Total: ${totalSum.toFixed(2)} leva`);
}

solve([ '5', '2' ])