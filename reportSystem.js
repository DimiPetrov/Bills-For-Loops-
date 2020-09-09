function solve(input) {
    let targetSum = Number(input.shift());
    let cashTotal = 0;
    let cardTotal = 0;
    let currentBatch = 0;
    let cashPayments = 0;
    let cardPayments = 0;
    let command;

    //we stop if we reach the End command but we also stop if there is nothing left to process
    while(command !== 'End' && input.length !== 0){
        //extract one record from the array
        command = input.shift();

        //then process it
        //console.log(input.length);
        currentBatch++;
        let amount = Number(command);

        //processing cash
        if(currentBatch % 2 !== 0) {
            if(amount <= 100) {
                console.log(`Product sold!`);
                cashTotal += amount;
                cashPayments++;
            } else {
                console.log(`Error in transaction!`);
            }

        // else processing card
        } else {
            if(amount >= 10) {
                console.log(`Product sold!`);
                cardTotal += amount;
                cardPayments++;  
            } else {
                console.log(`Error in transaction!`);
            }
        }
        
    }
    let totalSum = cashTotal + cardTotal;
    let averageCash = cashTotal / cashPayments;
    let averageCard = cardTotal / cardPayments;
    if(totalSum >= targetSum) {
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