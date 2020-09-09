function solve(input) {
    let index = 0;
    let num = input[index];
    index++;

    let redEggs = 0;
    let orangeEggs = 0;
    let blueEggs = 0;
    let greenEggs = 0;

    for(let i = 1; i <= num; i++) {
        let colour = input[index];
        index++;
        switch(colour) {
            case 'red': redEggs++; break;
            case 'orange': orangeEggs++; break;
            case 'blue': blueEggs++; break;
            case 'green': greenEggs++; break;
        }
    }
        let maxNumber = redEggs;
        let maxColour = "red";
        if(orangeEggs > maxNumber) {
            maxColour = "orange";
            maxNumber = orangeEggs;
        } if(blueEggs > maxNumber) {
            maxColour = "blue";
            maxNumber = blueEggs;
        } if(greenEggs > maxNumber) {
            maxColour = "green";
            maxNumber = greenEggs;
        }

      console.log(`Red eggs: ${redEggs}`);
      console.log(`Orange eggs: ${orangeEggs}`);
      console.log(`Blue eggs: ${blueEggs}`);
      console.log(`Green eggs: ${greenEggs}`);
      console.log(`Max eggs: ${maxNumber} -> ${maxColour}`);
}

solve([
    '7',     'orange',
    'blue',  'green',
    'green', 'blue',
    'red',   'green',
    ''
  ]
  )