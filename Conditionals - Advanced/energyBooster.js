function calculation([type1, type2, arg1]) {
    let fruit = type1;
    let size = type2;
    let sets = Number(arg1);

    let price = 0;

    if(size === "small") {
        switch(fruit) {
            case "Watermelon": price = sets * 2 * 56; break;
            case "Mango": price = sets * 2 * 36.66; break;
            case "Pineapple": price = sets * 2 * 42.1; break;
            case "Raspberry": price = sets * 2 * 20; break
        }
    } else if(size === "big") {
        switch(fruit) {
            case "Watermelon": price = sets * 5 * 28.7; break;
            case "Mango": price = sets * 5 * 19.6; break;
            case "Pineapple": price = sets * 5 * 24.8; break;
            case "Raspberry": price = sets * 5 * 15.2; break
        }
    }
    if(price < 400) {
        totalPrice = price;
    } else if(price >= 400 && price <= 1000) {
        totalPrice = price * 0.85;
    } else if(price > 1000) {
        totalPrice = price / 2;
    }
     console.log(`${totalPrice.toFixed(2)} lv.`);
}

calculation(["Mango", "big", 8])