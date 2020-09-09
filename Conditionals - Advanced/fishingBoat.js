function fishingBoat(arg1, type, arg2) {
    let budget = Number(arg1);
    let season = type;
    let fishermen = Number(arg2);

    if(fishermen <= 6) {
        switch(season) {
            case "Spring": rent = 3000 * 0.9; break;
            case "Summer": rent = 4200 * 0.9; break;
            case "Autumn": rent = 4200 * 0.9; break;
            case "Winter": rent = 2600 * 0.9; break;    
        }       
    } else if(fishermen > 6 && fishermen <= 11) {
        switch(season) {
            case "Spring": rent = 3000 * 0.85; break;
            case "Summer": rent = 4200 * 0.85; break;
            case "Autumn": rent = 4200 * 0.85; break;
            case "Winter": rent = 2600 * 0.85; break;    
        }       
    } else {
        switch(season) {
            case "Spring": rent = 3000 * 0.75; break;
            case "Summer": rent = 4200 * 0.75; break;
            case "Autumn": rent = 4200 * 0.75; break;
            case "Winter": rent = 2600 * 0.75; break;    
        }       
    }

    if(fishermen % 2 === 0 && season != "Autumn") {
        totalRent = rent * 0.95;
    } else {
        totalRent = rent;
    }

    if(budget >= totalRent) {
        console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(totalRent - budget).toFixed(2)} leva.`);
    }
}

fishingBoat(2000, "Winter", 13)