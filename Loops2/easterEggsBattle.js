function solve(input){
    let playerFirst = Number(input.shift());
    let playerSecond = Number(input.shift());
    
    let command = input.shift();
  
    let winPlayerOne = 0;
    let winPlayerTwo = 0;
    
    while (command != "End of battle"){
          if(command == "one"){
            playerSecond = playerSecond - 1;
            winPlayerOne++;
            if(playerSecond == 0){
              console.log(`Player two is out of eggs. Player one has ${playerFirst} eggs left.`)
              return;
            }
          }
          else if(command == "two"){
            playerFirst = playerFirst - 1;
            winPlayerTwo++;
            if(playerFirst == 0){
              console.log(`Player one is out of eggs. Player two has ${playerSecond} eggs left.`);
              return;
            }
          }  
    command = input.shift();
    }
    if(playerFirst > 0 && playerSecond > 0){
    console.log(`Player one has ${playerFirst} eggs left.`);
    console.log(`Player two has ${playerSecond} eggs left.`);
    }
  }

  solve([
    '6',   '3',   'one',
    'two', 'two', 'one',
    'one', '',    '',
    '',    ''
  ])