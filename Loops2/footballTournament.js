function solve(input) {
    let team = input.shift();
    let sumGames = Number(input.shift());

    if(sumGames === 0) {
        console.log(`${team} hasn't played any games during this season.`);
    } else {
        let wins = 0;
        let draws = 0;
        let losses = 0;
        let points = 0;
        for(let i = 1; i <= sumGames; i++) {
            let gameType = input.shift();
            switch(gameType) {
                case 'W': wins++; points += 3; break;
                case 'D': draws++; points += 1; break;
                case 'L': losses++; break;
            }

        }

        let percentWins = (wins / sumGames * 100).toFixed(2);
        
        console.log(`${team} has won ${points} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${wins}`);
        console.log(`## D: ${draws}`);
        console.log(`## L: ${losses}`);
        console.log(`Win rate: ${percentWins}%`);
    }
 
}

solve([ 'Chelsea', '0' ])