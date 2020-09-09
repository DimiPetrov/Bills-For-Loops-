function journey(arg1, arg2) {
    let budget = Number(arg1);
    let season = arg2;
    let destination = "";
    let price = 0;
    let type = "";
    
    if(season === "summer") {
        if(budget <= 100) {
            destination = "Bulgaria";
            price = budget * 0.3;
        } else if(budget > 100 && budget <= 1000) {
            destination = "Balkans";
            price = budget * 0.4;
        } else {
            destination = "Europe"
            price = budget * 0.9;
        }
        type = "Camp";
    } else if(season === "winter") {
        if(budget <= 100) {
            destination = "Bulgaria";
            price = budget * 0.7;
        } else if(budget > 100 && budget <= 1000) {
            destination = "Balkans";
            price = budget * 0.8;
        } else {
            destination = "Europe"
            price = budget * 0.9;
        }
        type = "Hotel";
    }

    if(destination === "Europe") {
        type = "Hotel";
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${price.toFixed(2)}`);
}

journey(1500, "summer")