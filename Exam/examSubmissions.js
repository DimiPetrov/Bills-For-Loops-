function solve(arg1, arg2) {
   let students = Number(arg1);
   let tasks = Number(arg2);

   let submissions = (students * Math.ceil(tasks * 2.8) + students * Math.floor(tasks / 3));
   let memory = 5 * Math.ceil(submissions / 10);
   console.log(`${memory} KB needed`);
   console.log(`${submissions} submissions`);
} 

solve(11, 7)