function solve(input) {
    let bakes = Number(input.shift());
    let sugarCount = 0;
    let flourCount = 0;
    let maxSugar = 0;
    let maxFlour = 0;

    for(let i = 1; i <= bakes; i++) {
        let sugar = Number(input.shift());
        let flour = Number(input.shift());
        sugarCount += sugar;
        flourCount += flour;

        if(sugar > maxSugar) {
            maxSugar = sugar;
        }
        if(flour > maxFlour) {
            maxFlour = flour;
        }
    }

    let packageSugar = Math.ceil(sugarCount / 950.0);
    let packageFlour = Math.ceil(flourCount / 750.0);

    console.log(`Sugar: ${packageSugar}`);
    console.log(`Flour: ${packageFlour}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);

}

solve([
    '3',   '400',
    '350', '250',
    '300', '450',
    '380', ''
  ]
  )