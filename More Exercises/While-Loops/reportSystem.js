function solve(input) {
    let finalSum = Number(input.shift());
    let cashTotal = 0;
    let cardTotal = 0;
    let currentBatch = 0;
    let cashPayments = 0;
    let cardPayments = 0;
    let command = input.shift();

    while(command !== 'End'){
        currentBatch++;
        let amount = Number(command);
        if(currentBatch % 2 !== 0) {
            if(amount <= 100) {
                console.log(`Product sold!`);
                cashTotal += amount;
                cashPayments++;
            } else {
                console.log(`Error in transaction!`);
            }
        } else {
            if(amount >= 10) {
                console.log(`Product sold!`);
                cardTotal += amount;
                cardPayments++;  
            } else {
                console.log(`Error in transaction!`);
            }
        }
        command = input.shift();
    }
    let totalSum = cashTotal + cardTotal;
    let averageCash = cashTotal / cashPayments;
    let averageCard = cardTotal / cardPayments;
    if(totalSum >= finalSum) {
        console.log(`Average CS: ${averageCash.toFixed(2)}`);
        console.log(`Average CC: ${averageCard.toFixed(2)}`);
    } else {
        console.log(`Failed to collect required money for charity.`);
    }
}

solve([
    '500', '120',
    '8',   '63',
    '256', '78',
    '317'
  ])