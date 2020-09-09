function solve(input) {
    let loads = Number(input.shift());
    let van = 0;
    let truck = 0;
    let train = 0;
    let price = 0;

    for(let i = 1; i <= loads; i++) {
        let weight = Number(input.shift());
        if(weight <= 3) {
            van += weight;
            price += 200 * weight;
        } else if(weight > 3 && weight <= 11) {
            truck += weight;
            price += 175 * weight;
        } else {
            train += weight;
            price += 120 * weight;
        }
    }
    let totalWeight = van + truck + train;
    let averagePrice = (price / totalWeight).toFixed(2);
    let vanPercent = (van / totalWeight * 100).toFixed(2);
    let truckPercent = (truck / totalWeight * 100).toFixed(2);
    let trainPercent = (train / totalWeight * 100).toFixed(2);
    console.log(averagePrice);
    console.log(`${vanPercent}%`);
    console.log(`${truckPercent}%`);
    console.log(`${trainPercent}%`);
}

solve([ '4', '1', '5', '16', '3' ])