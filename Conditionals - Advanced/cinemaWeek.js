function calculation([type1, type2, arg1]) {
    let name = type1;
    let hall = type2;
    let tickets = Number(arg1);

    if(hall === "normal") {
        switch(name) {
            case "A Star Is Born": price = 7.50; break;
            case "Bohemian Rhapsody": price = 7.35; break;
            case "Green Book": price = 8.15; break;
            case "The Favourite": price = 8.75; break;
        }
    } else if(hall === "luxury") {
        switch(name) {
            case "A Star Is Born": price = 10.50; break;
            case "Bohemian Rhapsody": price = 9.45; break;
            case "Green Book": price = 10.25; break;
            case "The Favourite": price = 11.55; break;
        }
    } else if(hall === "ultra luxury") {
        switch(name) {
            case "A Star Is Born": price = 13.50; break;
            case "Bohemian Rhapsody": price = 12.75; break;
            case "Green Book": price = 13.25; break;
            case "The Favourite": price = 13.95; break;
        }
    }
    let income = price * tickets;
    console.log(`${name} -> ${income.toFixed(2)} lv.`);
}

calculation(["The Favourite", "ultra luxury", 34])