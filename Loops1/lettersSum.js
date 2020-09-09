function solve(arg1, arg2, arg3) {
    let productName = arg1;
    let num = Number(arg2);
    let budget = Number(arg3);
    let result = 0;

    for (i = 0; i < arg1.length; i++) {
        if(arg1[i] === "a" || arg1[i] === "e" || arg1[i] === "i" || arg1[i] === "o" || arg1[i] === "u" || arg1[i] === "y") {
            result += 3;
        } else {
            result += 1;
        }
    }
    result *= num;
    if(result > budget) {
        console.log(`Cannot buy ${productName}. Product value: ${result.toFixed(2)}`);
    } else {
        console.log(`${productName} bought. Money left: ${(budget - result).toFixed(2)}`);
    }
}

solve("apple", 2, 20)