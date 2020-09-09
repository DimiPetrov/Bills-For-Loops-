function solve(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinations = 0;
    let flag = false;

    for(let leftNum = start; leftNum <= end; leftNum++) {
        for(let rightNum = start; rightNum <= end; rightNum++) {
            combinations++;
            if((leftNum + rightNum) === magicNumber) {
                let expression = `(${leftNum} + ${rightNum} = ${magicNumber})`;
                console.log(`Combination N:${combinations} ${expression}`);
                flag = true;
                break;
            }
        }

        if(flag) {
            break;
        }
    }

    if(flag === false) {
        console.log(`${combinations} combinations - neither equals ${magicNumber}`);
    }
}

solve([ '88', '888', '2000' ])