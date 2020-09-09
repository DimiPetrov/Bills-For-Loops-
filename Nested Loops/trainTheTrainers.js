function solve(input) {
   let countJury = input.shift();
   let presentationName = input.shift();

   let finalAssessment = 0;
   let countGrade = 0;

   while(presentationName !== 'Finish') {
       let averageGrade = 0;
       for(let i = 0; i < countJury; i++) {
           let grade = Number(input.shift());
           averageGrade += grade;
           finalAssessment += grade;
           countGrade++;
       }
       console.log(`${presentationName} - ${(averageGrade / countJury).toFixed(2)}.`);
       presentationName = input.shift();
   }
   console.log(`Student's final assessment is ${(finalAssessment / countGrade).toFixed(2)}.`);
}

solve([
    '2',
    'Objects and Classes',
    '5.77',
    '4.23',
    'Dictionaries',
    '4.62',
    '5.02',
    'RegEx',
    '2.88',
    '3.42',
    'Finish'
  ]
  )