function solve(input) {
    let cruise = input[0];
    let type = input[1];
    let nights = Number(input[2]);

    if(cruise === 'Mediterranean') {
        switch(type) {
            case 'standard cabin': price = nights * 27.50; break;
            case 'cabin with balcony': price = nights * 30.20; break;
            case 'apartment': price = nights * 40.50; break;
        }
    } else if(cruise === 'Adriatic') {
        switch(type) {
            case 'standard cabin': price = nights * 22.99; break;
            case 'cabin with balcony': price = nights * 25; break;
            case 'apartment': price = nights * 34.99; break;
        }
    } else if(cruise === 'Aegean') {
        switch(type) {
            case 'standard cabin': price = nights * 23; break;
            case 'cabin with balcony': price = nights * 26.60; break;
            case 'apartment': price = nights * 39.80; break;
        }
    }
    let cost = price * 4
    if(nights > 7) {
      cost *= 0.75;
    } 
    console.log(`Annie's holiday in the ${cruise} sea costs ${cost.toFixed(2)} lv.`);
}

solve([ 'Mediterranean', 'cabin with balcony', '12', '' ])