function sumNumbers(input) {
    let sum = 0;
    let index = 0;
    let command = input[index];
    index++;

    while(command != 'Stop') {
        sum += Number(command);
        command = input[index];
        index++;
    }

     console.log(sum);
}

sumNumbers([ '1', '2', '3', '4', '5', '6', 'Stop' ])