function solve(input) {
  let standardTotal = 0;
  let studentTotal = 0;
  let kidTotal = 0;

  let movieName;
  while ((movieName = input.shift()) !== 'Finish') {
    let seatsTotal = Number(input.shift());
    let seatsUsed = 0;
    
    let command;
    while (seatsUsed < seatsTotal && (command = input.shift()) !== 'End') {
      seatsUsed++;
      switch (command) {
        case 'student':
          studentTotal++;
          break;
        case 'standard':
          standardTotal++;
          break;
        case 'kid':
          kidTotal++;
          break;
      }
    }
    
    let usedPercentage = (seatsUsed / seatsTotal * 100).toFixed(2);
    console.log(`${movieName} - ${usedPercentage}% full.`);
  }

  const totalTicketsSold = kidTotal + studentTotal + standardTotal;
  let studentPercentage = (studentTotal / totalTicketsSold * 100).toFixed(2);
  let standardPercentage = (standardTotal / totalTicketsSold * 100).toFixed(2);
  let kidPercentage = (kidTotal / totalTicketsSold * 100).toFixed(2);

  console.log(`Total tickets: ${totalTicketsSold}`);
  console.log(`${studentPercentage}% student tickets.`);
  console.log(`${standardPercentage}% standard tickets.`);
  console.log(`${kidPercentage}% kids tickets.`);
}

solve([
    'Taxi',     '10',
    'standard', 'kid',
    'student',  'student',
    'standard', 'standard',
    'End',      'Scary Movie',
    '6',        'student',
    'student',  'student',
    'student',  'student',
    'student',  'Finish'
  ])