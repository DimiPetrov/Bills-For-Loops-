function solve(arg1, arg2, arg3) {
   let students = Number(arg1);
   let tasks = Number(arg2);
   let energy = Number(arg3);
   let questionCount = 0;
   let taskCount = 0;

   while(energy > 0) {
       energy += tasks * 2;
       students -= tasks;
       taskCount += tasks;
       energy -= students * 2 * 3;
       questionCount += students * 2;
       if(students < 10) {
        console.log(`The students are too few!`);
        console.log(`Problems solved: ${taskCount}`);
        break;
       }
       students += Math.floor(students * 0.1);
   }
   if(energy <= 0) {
    console.log(`The trainer is too tired!`);
    console.log(`Questions asked: ${questionCount}`);
   }
}

solve(20, 5, 500)