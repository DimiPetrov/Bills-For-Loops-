function solve(input) {
    let index = 0;
    let participants = Number(input[index]);
    index++;
    let totalBakedSweet = 0;
    let sum = 0;

  for(let i = 1; i <= participants; i++) {
    let name = input[index];
    index++;
    let command = input[index];
    index++;
    let cookiesCount = 0;
    let cakesCount = 0;
    let wafflesCount = 0;

    while(command !== 'Stop baking') {
      let type = command;
      let countOfBakingSweets = Number(input[index]);
      index++;
          switch(type) {
            case 'cookies': cookiesCount += countOfBakingSweets; sum += countOfBakingSweets * 1.5; break;
            case 'cakes': cakesCount += countOfBakingSweets; sum += countOfBakingSweets * 7; break;
            case 'waffles': wafflesCount += countOfBakingSweets; sum += countOfBakingSweets * 2.30; break;
          }
      command = input[index];
      index++;
    }
    totalBakedSweet += cookiesCount + cakesCount + wafflesCount;
    console.log(`${name} baked ${cookiesCount} cookies, ${cakesCount} cakes and ${wafflesCount} waffles.`);

  }

  console.log(`All bakery sold: ${totalBakedSweet}`);
  console.log(`Total sum for charity: ${sum.toFixed(2)} lv.`);

}

solve([
    '3',            'Iva',
    'cookies',      '5',
    'cakes',        '3',
    'Stop baking!', 'George',
    'cakes',        '7',
    'waffles',      '2',
    'Stop baking!', 'Ivan',
    'cookies',      '6',
    'Stop baking!'
  ])