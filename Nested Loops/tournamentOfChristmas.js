function solve(input) {
    let days = Number(input.shift());
    let allMoney = 0;
    let dayWin = 0;
    let dayLose = 0;

    for(i = 1; i <= days; i++){
        let winCount = 0;
        let loseCount = 0;
        let dayMoney = 0;

        while(true) {
            let sport = input.shift();
            if(sport === 'Finish') {
                break;
            } 
            
               let result = input.shift();
            if(result === 'win'){
                winCount++;
                dayMoney += 20;
            } else if(result === 'lose') {
                loseCount++;
            }
        }
        if(winCount > loseCount) {
            dayMoney *= 1.1;
            dayWin++;
        } else {
            dayLose++;
        }
            allMoney += dayMoney;       
    } 

    if(dayWin > dayLose) {
            allMoney *= 1.2;
            console.log(`You won the tournament! Total raised money: ${allMoney.toFixed(2)}`);
    } else {
            console.log(`You lost the tournament! Total raised money: ${allMoney.toFixed(2)}`);
        }
}

solve([
    '2',         'volleyball',
    'win',       'football',
    'lose',      'basketball',
    'win',       'Finish',
    'golf',      'win',
    'tennis',    'win',
    'badminton', 'win',
    'Finish'
  ]
  )