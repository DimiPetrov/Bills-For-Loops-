function solve(arg1, arg2) {
  let bees = Number(arg1);
  let flowers = Number(arg2);

  let totalHoney = bees * flowers * 0.21;
  let comb = 100;
  let combNumber = Math.floor(totalHoney / comb);
  console.log(`${combNumber} honeycombs filled.`);
  let remainingHoney = (totalHoney - combNumber * 100).toFixed(2);
  console.log(`${remainingHoney} grams of honey left.`);

}

solve(25, 6400)