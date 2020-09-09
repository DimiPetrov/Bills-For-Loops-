function easterTrip([type1, type2, arg1]) {
    let destination = type1;
    let dates = type2;
    let nights = Number(arg1);

    if(dates === "21-23") {
        switch(destination) {
            case "France": cost = nights * 30; break;
            case "Italy": cost = nights * 28; break;
            case "Germany": cost = nights * 32; break;
        }
    } else if(dates === "24-27") {
        switch(destination) {
            case "France": cost = nights * 35; break;
            case "Italy": cost = nights * 32; break;
            case "Germany": cost = nights * 37; break;
        }
    } else if(dates === "28-31") {
        switch(destination) {
            case "France": cost = nights * 40; break;
            case "Italy": cost = nights * 39; break;
            case "Germany": cost = nights * 43; break;
        }
    }
       
    console.log(`Easter trip to ${destination} : ${cost.toFixed(2)} leva.`);
}

easterTrip(["France", "28-31", 8])