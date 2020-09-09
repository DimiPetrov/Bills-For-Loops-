function solve(input) {
    let index = 0;
    let tournament = input[index]
    index++;

    let win = 0;
    let lose = 0;
    let totalGames = 0;

    while(tournament !== 'End of tournaments') {

        let games = Number(input[index]);
        index++;
        totalGames += games;
        for(let i = 1; i <= games; i++) {
            let desiPoints = Number(input[index]);
            index++;
            let otherPoints = Number(input[index]);
            index++;
            if(desiPoints > otherPoints) {
                win++;
                console.log(`Game ${i} of tournament ${tournament}: win with ${desiPoints - otherPoints} points.`);
            } else if(otherPoints > desiPoints) {
                lose++;
                console.log(`Game ${i} of tournament ${tournament}: lost with ${otherPoints - desiPoints} points.`);
            }
        }
          tournament = input[index];
          index++;
    }
    console.log(`${(win / totalGames * 100).toFixed(2)}% matches win`);
    console.log(`${(lose / totalGames * 100).toFixed(2)}% matches lost`);

}

solve([
    'Dunkers',            '2',
    '75',                 '65',
    '56',                 '73',
    'Fire Girls',         '3',
    '67',                 '34',
    '83',                 '98',
    '66',                 '45',
    'End of tournaments', ''
  ]
  )