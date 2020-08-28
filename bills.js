function solve(input) {
    let months = Number(input[0]);
    let electricity = 0;
    let other = 0;

    for(let i = 1; i <= months; i++) {
        let elMonth = Number(input[i]);
        electricity += elMonth;
        let otherMonth = (elMonth + 20 + 15) * 1.2;
        other += otherMonth;
    }

    let water = 20 * months;
    let internet = 15 * months;
    let average = (electricity + water + internet + other) / months;

    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${other.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);

}

solve([ '5', '68.63', '89.25', '132.53', '93.53', '63.22' ])
