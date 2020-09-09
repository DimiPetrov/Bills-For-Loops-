function solve(input) {
    let n = Number(input.shift());
    let currentBatch = 0;
    let sum = 0;

    while(n !== '') {
        currentBatch++;
        sum += n;
    }

    let average = sum / currentBatch;
    console.log(average.toFixed(2));
}

solve([ '4', '3', '2', '4', '2' ])