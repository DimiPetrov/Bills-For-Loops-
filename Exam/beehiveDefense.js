function solve([arg1, arg2, arg3]) {
    let bees = Number(arg1);
    let bear = Number(arg2);
    let attack = Number(arg3);

    while(bees >= 100) {
        bees -= attack;
    
        if(bees < 0) {
            bees = 0;
        }
        bear -= bees * 5;
        if(bear <= 0) {
            console.log(`Beehive won! Bees left ${bees}.`);
            break;
        }
    }
    if(bees < 100) {
        console.log(`The bear stole the honey! Bees left ${bees}.`);
    } 
}

solve([200, 10000, 300])