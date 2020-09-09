function solution(input) {
   let maxUnsatisfiedGrades = Number(input.shift());
   let unsatisfiedGrades = 0;

   let currentExam = input.shift();
   let currentGrade = Number(input.shift());

   let passedExams = 0;
   let lastExam = "";
   let sumOfAllGrades = 0;

   while((currentExam !== "Enough") && (unsatisfiedGrades < maxUnsatisfiedGrades)) {
       passedExams++;
       lastExam = currentExam;
       sumOfAllGrades += currentGrade;

       if(currentGrade <= 4) {
           unsatisfiedGrades++;
       }

       currentExam = input.shift();
       currentGrade = Number(input.shift());
   }

   if(currentExam === "Enough") {
        console.log(`Average score: ${(sumOfAllGrades / passedExams).toFixed(2)}`);
        console.log(`Number of problems: ${passedExams}`);
        console.log(`Last problem: ${lastExam}`);
   } else {
       console.log(`You need a break, ${unsatisfiedGrades} poor grades.`);
   }
}

solution([ '4', 'Stone Age', '5', 'Freedom', '5', 'Storage', '3', 'Enough' ])