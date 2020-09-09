function solve(endNumber) {
    endNumber = Number(endNumber);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;

    for (let number = 1; number <= endNumber; number++) {
        if(number % 2 !== 0) {
            if(number < 10) {
               p1++;
            }

            if(number % 10 === 7) {
                p3++;
            }
        } else {
            p2++;
        } 

        if(100 % number === 0) {
            p4++;
        }
    }
        console.log(`${(p1 / endNumber * 100).toFixed(2)}%`); 
        console.log(`${(p2 / endNumber * 100).toFixed(2)}%`);
        console.log(`${(p3 / endNumber * 100).toFixed(2)}%`);
        console.log(`${(p4 / endNumber * 100).toFixed(2)}%`); 
}

solve(35)