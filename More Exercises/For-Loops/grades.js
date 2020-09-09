function solve(input) {
    let students = Number(input.shift());
    let top = 0;
    let four = 0;
    let three = 0;
    let fail = 0;
    let totalGrades = 0;

    for(let i = 1; i <= students; i++) {
        let grade = Number(input.shift());
        totalGrades += grade;
        if(grade >= 5.00) {
            top++;
        } else if(grade < 5.00 && grade >= 4.00) {
            four++;
        } else if(grade < 4.00 && grade >= 3.00) {
            three++;
        } else {
            fail++;
        }
    }

    let average = (totalGrades / students).toFixed(2);
    console.log(`Top students: ${(top / students * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(four / students * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(three / students * 100).toFixed(2)}%`);
    console.log(`Fail: ${(fail / students * 100).toFixed(2)}%`);
    console.log(`Average: ${average}`);
}

solve([
    '10',   '3',    '2.99',
    '5.68', '3.01', '4',
    '4',    '6',    '4.5',
    '2.44', '5',    ''
  ]
  )