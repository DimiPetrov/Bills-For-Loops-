function calculation([type1, type2, type3, arg1]) {
    let time = type1;
    let contract = type2;
    let internet = type3;
    let months = Number(arg1);

    if(time === "one") {        
        switch(contract) {
            case "Small": fee = 9.98; break;
            case "Middle": fee = 18.99; break;
            case "Large": fee = 25.98; break;
            case "ExtraLarge": fee = 35.99; break;
        }
    } else if(time === "two") {
        switch(contract) {
            case "Small": fee = 8.58; break;
            case "Middle": fee = 17.09; break;
            case "Large": fee = 23.59; break;
            case "ExtraLarge": fee = 31.79; break;
        }
    }

    if(internet === "yes") {
        if(fee <= 10) {
            price = fee + 5.5;
        } else if(fee > 10 && fee <= 30) {
            price = fee + 4.35;
        } else if(fee > 30) {
            price = fee + 3.85
        }
    } else if(internet === "no") {
        price = fee;
    }

    if(time === "one") {
        finalPrice = price * months;
    } else if(time === "two") {
        finalPrice = (price * months) * 0.9625;
    }
        console.log(`${finalPrice.toFixed(2)} lv.`);
}

calculation(["two", "Small", "yes", 20])