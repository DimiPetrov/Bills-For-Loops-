function invalidNumber(input) {
    let num = Number(input);
    
    if (num < 100 && num !== 0 || num > 200) {
    console.log("invalid");
    } else {
        console.log();
    }
}

invalidNumber(0)