function calculation([type1, type2, arg1, type3]) {
    let round = type1;
    let ticketType = type2;
    let tickets = Number(arg1);
    let photo = type3;

    if(round === "Quarter final") {
        switch(ticketType) {
            case "Standard": price = 55.50; break;
            case "Premium": price = 105.20; break;
            case "VIP": price = 118.90; break;
        }
    } else if(round === "Semi final") {
        switch(ticketType) {
            case "Standard": price = 75.88; break;
            case "Premium": price = 125.22; break;
            case "VIP": price = 300.40; break;
        }
    } else if(round === "Final") {
        switch(ticketType) {
            case "Standard": price = 110.10; break;
            case "Premium": price = 160.66; break;
            case "VIP": price = 400.00; break;
        }
    }
    ticketPrice = price * tickets;
    if(ticketPrice > 4000) {
         totalTicketPrice = ticketPrice * 0.75;
    } else if(ticketPrice <= 4000 && ticketPrice > 2500 && photo === "Y") {
        totalTicketPrice = (ticketPrice * 0.9) + (tickets * 40);
    } else if(ticketPrice <= 4000 && ticketPrice > 2500 && photo === "N") {
        totalTicketPrice = ticketPrice * 0.9;
    } else if(ticketPrice <= 2500 && photo === "Y") {
        totalTicketPrice = ticketPrice + tickets * 40;
    } else if(ticketPrice <= 2500 && photo === "N") {
        totalTicketPrice = ticketPrice;
    }
       console.log(`${totalTicketPrice.toFixed(2)}`);
}

calculation(["Quarter final", "Standard", 11, "N"])