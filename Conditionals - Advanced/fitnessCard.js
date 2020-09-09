function solve([arg1, type1, arg2, type2]) {
    let budget = Number(arg1);
    let gender = type1;
    let age = Number(arg2);
    let sport = type2;

    if(gender === "m") {
        switch(sport) {
            case "Gym": price = 42; break;
            case "Boxing": price = 41; break;
            case "Yoga": price = 45; break;
            case "Zumba": price = 34; break;
            case "Dances": price = 51; break;
            case "Pilates": price = 39; break;
        }
    } else if(gender === "f") {
        switch(sport) {
            case "Gym": price = 35; break;
            case "Boxing": price = 37; break;
            case "Yoga": price = 42; break;
            case "Zumba": price = 31; break;
            case "Dances": price = 53; break;
            case "Pilates": price = 37; break;
        }
    }
    if(age <= 19) {
        finalPrice = price * 0.8;
    } else {
        finalPrice = price;
    }
    let money = finalPrice - budget;
    if(money <= 0) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${money.toFixed(2)} more.`);
    }
}

solve([10, "m", 50, "Pilates"])