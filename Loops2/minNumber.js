function minNumber(input) {
    let index = 0;
    let totalCount = Number(input[index]);
    index++;
    let minNumber = Number.MAX_SAFE_INTEGER;
    let count = 0;
    while(count < totalCount) {
        let num = Number(input[index]);
        index++;
        if(num < minNumber) {
            minNumber = num;
        }
        count++;
    
    }

   console.log(minNumber);
}

minNumber([ '4', '45', '-20', '7', '99' ])