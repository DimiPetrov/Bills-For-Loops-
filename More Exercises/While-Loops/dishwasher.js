function solve(input) {
    const BOTTLE_DETERGENT_VOLUME = 750;
    const DETERGENT_NEEDED_FOR_DISH = 5;
    const DETERGENT_NEEDED_FOR_POT = 15;

    let bottles = Number(input.shift());
    let detergentLeftover = bottles * BOTTLE_DETERGENT_VOLUME;
    

    let dishes = 0;
    let pots = 0;
    let currentBatch = 0;

    let command = input.shift();

    while(command != 'End') {
        currentBatch++;

        let modulo = currentBatch % 3;

        if(modulo == 1 || modulo == 2){
            let numberOfDishes = Number(command);
            dishes += numberOfDishes;
            detergentLeftover -= DETERGENT_NEEDED_FOR_DISH * numberOfDishes;
        }else if(modulo == 0){
            let numberOfPots = Number(command);
            pots += numberOfPots;
            detergentLeftover -= DETERGENT_NEEDED_FOR_POT * numberOfPots;
        }

        command = input.shift();
        
    }

    if(detergentLeftover >= 0) {
        console.log(`Detergent was enough!`);
        console.log(`${dishes} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${detergentLeftover} ml.`);
    } else{
        console.log(`Not enough detergent, ${Math. abs(detergentLeftover)} ml. more necessary!`)
    }
}

solve([ '2', '53', '65', '55', 'End' ])