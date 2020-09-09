function solve([input]) {
  let days = Number(input.shift());
  let totalFood = Number(input.shift());

  let dogEaten = 0;
  let catEaten = 0;
  let biscuits = 0;
   
  for(let i = 1; i <= days; i++) {
    let dogFood = Number(input.shift());
    let catFood = Number(input.shift);
    dogEaten += dogFood;
    catEaten += catFood;

    if(i % 3 === 0) {
          biscuits = (dogFood + catFood) * 0.1;
      }
    }

    let totalEaten = dogEaten + catEaten;
    let percentEatenFood = (totalEaten / totalFood * 100).toFixed(2);
    let percentDog = (dogEaten /totalEaten * 100).toFixed(2);
    let percentCat = (catEaten / totalEaten * 100).toFixed(2);

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${percentEatenFood}% of the food has been eaten.`);
    console.log(`${percentDog}% eaten from the dog.`);
    console.log(`${percentCat}% eaten from the cat.`);
}

solve([
  '3',   '1000',
  '300', '20',
  '100', '30',
  '110', '40'
])