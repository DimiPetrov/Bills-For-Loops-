function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;

    let count = 1;
    let totalGrade = 0;
    let excluded = 0;
    let isExcluded = false;

    while(count <=12) {
        let grade = Number(input[index]);
        index++;
        if(grade >= 4.00) {
            count++;
            totalGrade += grade;
        } else if(grade < 4.00){
            excluded++;
        }
        if(excluded === 2) {
          isExcluded = true;
        }
        if(isExcluded === true) {
          console.log(`${name} has been excluded at ${count} grade`);
          return;
        }                  
    }
    let averageGrade = totalGrade /12;
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
}

graduation([
    'Gosho', '5',    '5.5',
    '6',     '5.43', '5.5',
    '6',     '5.55', '5',
    '6',     '6',    '5.43',
    '5'
  ])