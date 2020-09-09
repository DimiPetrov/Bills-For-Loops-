function solve(input1, input2) {
    let startingPopulation = Number(input1);
    let years = Number(input2);
    let population = startingPopulation;


    for(let i = 1; i <= years; i++) {

        population += Math.trunc((population / 10) * 2);
        if(i % 5 === 0) {
            population -= Math.trunc((startingPopulation / 50) * 5);
            startingPopulation = population;
        }
        population -= Math.trunc((population / 20) * 2);
        
    }
       console.log(`Beehive population: ${Math.trunc(population)}`);
}

solve(100, 6)