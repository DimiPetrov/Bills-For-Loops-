function solve(input) {
  let numPeople = Number(input.shift());

  let counterBack = 0;
  let counterChest = 0;
  let counterLegs = 0;
  let counterAbs = 0;

  let counterShake = 0;
  let counterBar = 0;
  

  for(let i = 1; i <= numPeople; i++) {
    let train = input.shift();
     switch(train) {
         case 'Back': counterBack++; break;
         case 'Chest': counterChest++; break;
         case 'Legs': counterLegs++; break;
         case 'Abs': counterAbs++; break;
         case 'Protein shake': counterShake++; break;
         case 'Protein bar': counterBar++; break;
     }
  }

  let visitors = counterBack + counterChest + counterLegs + counterAbs;
  let percentTraining = (visitors / numPeople) * 100;
  let percentProduct = 100 - percentTraining;

  console.log(`${counterBack} - back`);
  console.log(`${counterChest} - chest`);
  console.log(`${counterLegs} - legs`);
  console.log(`${counterAbs} - abs`);
  console.log(`${counterShake} - protein shake`);
  console.log(`${counterBar} - protein bar`);
  console.log(`${percentTraining.toFixed(2)}% - work out`);
  console.log(`${percentProduct.toFixed(2)}% - protein`);
}

solve(
    '7',
    'Chest',
    'Back',
    'Legs',
    'Legs',
    'Abs',
    'Protein shake',
    'Protein bar'])