function solve(input){
    let capacity = Number(input.shift());

    let suitcasesCount = 0;

    while (true){
        let suitcase = input.shift();

        if (suitcase == 'End'){
            console.log(`Congratulations! All suitcases are loaded!`)
            break;
        }

        suitcasesCount += 1;  

        if (suitcasesCount % 3 == 0){
            capacity -= suitcase * 1.1
        }
        else{
            capacity -= suitcase
        }
          
        if (capacity <= 0){
            console.log(`No more space!`)
            suitcasesCount -= 1
            break;
        }    
    }
    console.log(`Statistic: ${suitcasesCount} suitcases loaded.`)
}

solve([
    '1200.2', '260',
    '380.5',  '125.6',
    '305',    'End',
    ''
  ])