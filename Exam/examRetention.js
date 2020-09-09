function solve(input) {
    let students = Number(input[0]);
   let seasons = Number(input[1]);
   let totalStudents = students;

   for(i = 1; i <= seasons; i++) {

       totalStudents -= Math.ceil(totalStudents * 0.9);
       totalStudents -= Math.ceil(totalStudents * 0.9);
       totalStudents -= Math.ceil(totalStudents * 0.8);
       if(i % 3 === 0) {
           totalStudents += Math.ceil(totalStudents * 0.15);
       } else {
        totalStudents += Math.ceil(totalStudents * 0.05);
       }
    }
    console.log(`Students: ${totalStudents}`);
    
}

solve(2000, 5)

