# Bills-For-Loops-


function solve([input]) {
    let months = Number(input[0]);

    for(let i = 1; i <= months; i++) {
        let index = 1;
        let elMonth = input[index];
        index++;
        let electricity = 0;
        electricity += elMonth;

        let otherMonth = (elMonth + 20 + 15) * 1.2;
        let other = 0;
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
