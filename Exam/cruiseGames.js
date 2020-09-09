function solve(input) {
   let index = 0;
   let name = input[index];
   index++;
   let countGame = Number(input[index]);
    index++;

   let volleyballPoints = 0;
   let tennisPoints = 0;
   let badmintonPoints = 0;
   let volleyballGames = 0;
   let tennisGames = 0;
   let badmintonGames = 0;

   for(let i = 1; i <= countGame; i++) {
       let gameName = input[index];
       index++;
       let score = Number(input[index]);
       index++;
       switch(gameName) {
          case 'volleyball': volleyballPoints += score * 1.07; volleyballGames++; break;
          case 'tennis': tennisPoints += score * 1.05; tennisGames++; break;
          case 'badminton': badmintonPoints += score * 1.02; badmintonGames++; break;
       }
   }
   let averageVolleyball = Math.floor(volleyballPoints / volleyballGames);
   let averageTennis = Math.floor(tennisPoints / tennisGames);
   let averageBadminton = Math.floor(badmintonPoints / badmintonGames);

   let totalPoints = volleyballPoints + tennisPoints + badmintonPoints;
   if(averageVolleyball >= 75 && averageTennis >= 75 && averageBadminton >= 75) {
       console.log(`Congratulations, ${name}! You won the cruise games with ${Math.floor(totalPoints)} points.`);
   } else {
       console.log(`Sorry, ${name}, you lost. Your points are only ${Math.floor(totalPoints)}.`);
   }
}

solve([ 'Pepi', '3', 'volleyball', '78', 'tennis', '98', 'badminton', '105' ]
)