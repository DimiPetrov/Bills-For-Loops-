function newHouse(type, arg1, arg2) {
    let typeFlower = type;
    let amountFlowers = Number(arg1);
    let budget = Number(arg2);

    if(typeFlower === "Roses") {
        if(amountFlowers > 80) {
            cost = (amountFlowers * 5) * 0.9;
        } else {
            cost = amountFlowers * 5;
        }
    } else if(typeFlower === "Dahlias") {
        if(amountFlowers > 90) {
            cost = (amountFlowers * 3.8) * 0.85;
        } else {
            cost = amountFlowers * 3.8;
        }
    } else if(typeFlower === "Tulips") {
        if(amountFlowers > 80) {
            cost = (amountFlowers * 2.8) * 0.85;
        } else {
            cost = amountFlowers * 2.8;
        }
    } else if(typeFlower === "Narcissus") {
        if(amountFlowers < 120) {
            cost = (amountFlowers * 3) * 1.15;
        } else {
            cost = amountFlowers * 3;
        }
    } else if(typeFlower === "Gladiolus") {
        if(amountFlowers < 80) {
            cost = (amountFlowers * 2.5) * 1.2;
        } else {
            cost = amountFlowers * 2.5;
        }
    }
    
    if(budget >= cost) {
        console.log(`Hey, you have a great garden with ${amountFlowers} ${typeFlower} and ${(budget - cost).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(cost - budget).toFixed(2)} leva more.`);
    }
}

newHouse("Narcissus", 119, 360)