function solve([arg1, type1, type2, arg2]) {
    let budget = Number(arg1);
    let destination = type1;
    let season = type2;
    let days = Number(arg2);

    if(season === "Winter") {
        switch(destination) {
            case "Dubai": cost = (45000 * days) * 0.7; break;
            case "Sofia": cost = (17000 * days) * 1.25; break;
            case "London": cost = 24000 * days; break;          
        }
    } else if(season === "Summer") {
        switch(destination) {
            case "Dubai": cost = (40000 * days) * 0.7; break;
            case "Sofia": cost = (12500 * days) * 1.25; break;
            case "London": cost = 20250 * days; break;
        }
    }
    if(budget >= cost) {
        console.log(`The budget for the movie is enough! We have ${(budget - cost).toFixed(2)} leva left!`);
    } else if(cost > budget) {
        console.log(`The director needs ${(cost - budget).toFixed(2)} leva more!`);
    }
}

solve([400000, "Sofia", "Winter", 20])