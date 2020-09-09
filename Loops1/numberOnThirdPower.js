function numberOnThirdPower(n) {
   let start = 0;
    if (n % 2 === 0) {
      start = 2;
    } else {
    start = 1;
    }
    for (let i = start; i <= n; i += 2) {
    console.log(`Current number: ${i}. Cube: ${i * i * i}`);
    }
}

numberOnThirdPower(6)