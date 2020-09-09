function calculation([type1, type2, arg1]) {
    let name = type1;
    let meal = type2;
    let tickets = Number(arg1);

    if(name === "John Wick") {
        switch(meal) {
            case "Drink": price = 12; break;
            case "Popcorn": price = 15; break;
            case "Menu": price = 19; break;
        }
    } else if(name === "Star Wars") {
        switch(meal) {
            case "Drink": price = 18; break;
            case "Popcorn": price = 25; break;
            case "Menu": price = 30; break;
        }
    } else if(name === "Jumanji") {
        switch(meal) {
            case "Drink": price = 9; break;
            case "Popcorn": price = 11; break;
            case "Menu": price = 14; break;
        }
    }
    if(name === "Star Wars" && tickets >= 4) {
        cost = (price * tickets) * 0.7;
    } else if(name === "Jumanji" && tickets === 2) {
        cost = (price * tickets) * 0.85;
    } else {
        cost = price * tickets;
    }
      console.log(`Your bill is ${cost.toFixed(2)} leva.`);
}

calculation(["Jumanji", "Menu", 2])