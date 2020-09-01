function solve(input) {
    let bottles = Number(input.shift());
    let detergent = bottles * 750;
    

    let dishes = 0;
    let pots = 0;

    while(command != 'End') {
        let command = input.shift();
    }

    if(detergent >= 0) {
        console.log(`Detergent was enough!`);
        console.log(`${dishes} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${detergent} ml.`);
    } else{
        console.log(`Not enough detergent, ${Math. abs(detergent)} ml. more necessary!`)
    }
}

solve([ '2', '53', '65', '55', 'End' ])