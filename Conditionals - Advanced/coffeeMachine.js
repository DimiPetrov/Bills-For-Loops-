function calculation([type1, type2, arg1]) {
    let drinkType = type1;
    let sugar = type2;
    let sumDrinks = Number(arg1);

    if(drinkType === "Espresso") {
        switch(sugar) {
            case "Without": price = 0.9 * 0.65; break;
            case "Normal": price = 1; break;
            case "Extra": price = 1.2; break;
        }
    } else if(drinkType === "Cappuccino") {
        switch(sugar) {
            case "Without": price = 1 * 0.65; break;
            case "Normal": price = 1.2; break;
            case "Extra": price = 1.6; break;
        }
    } else if(drinkType === "Tea") {
        switch(sugar) {
            case "Without": price = 0.5 * 0.65; break;
            case "Normal": price = 0.6; break;
            case "Extra": price = 0.7; break;
        }
    }
    if(drinkType === "Espresso" && sumDrinks >= 5){
        cost = (price * sumDrinks) * 0.75;
    } else {
        cost = price * sumDrinks;
    }
    if(cost > 15) {
        totalCost = cost * 0.8;
    } else {
        totalCost = cost;
    }
      console.log(`You bought ${sumDrinks} cups of ${drinkType} for ${totalCost.toFixed(2)} lv.`);
}

calculation(["Tea", "Extra", 3])