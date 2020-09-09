function solve(input) {
    let budget = Number(input.shift());
    let nameOfProduct = input.shift();
    let products = 0;
    let totalPrice = 0;

    while(nameOfProduct !== 'Stop') {
        let priceOfProduct = Number(input.shift());

        if((products + 1) % 3 === 0) {
            priceOfProduct = priceOfProduct / 2;
        }

        budget -= priceOfProduct;
        if(budget < 0) {
            break;
        }

        products++;
        totalPrice += priceOfProduct;
        nameOfProduct = input.shift();
    
    }

    if (budget >= 0) {
        console.log(`You bought ${products} products for ${(totalPrice).toFixed(2)} leva.`);
    } else if (budget < 0) {
        console.log(`You don't have enough money!`);
        console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`);
    }
}

solve([ '54', 'Thermal underwear', '24', 'Sunscreen', '45' ])