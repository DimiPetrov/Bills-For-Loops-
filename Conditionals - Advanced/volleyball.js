function calculation(arg1, arg2, arg3) {
    let yearType = arg1;
    let p = Number(arg2);
    let h = Number(arg3);


    let gamesSofia = (48 - h) * (3 / 4) + p * (2 / 3);
    let gamesHometown = h;
    let totalGames = gamesSofia + gamesHometown;


    if(yearType === "leap") {
        totalGames *= 1.15; 
    } else if(yearType === "normal") {
        totalGames *= 1;
    }
      console.log(Math.floor(totalGames));
}

calculation("normal", 6, 13)