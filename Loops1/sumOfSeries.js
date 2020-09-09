function sumOfSeries(n) {
    let num = Number(n);
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i * i;
    }
     console.log(sum);
}

sumOfSeries(4)