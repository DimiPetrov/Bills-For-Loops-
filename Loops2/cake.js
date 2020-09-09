function solve(input) {
   let l = Number(input.shift());
   let w = Number(input.shift());
   let piecesEaten = 0;

   let totalPieces = l * w;
   let command = input.shift();
   while(command !== 'STOP') {
       let piecesCounter = Number(command);
       piecesEaten += piecesCounter;
     if(piecesEaten > totalPieces) {
        break;
      }
     command = input.shift();
    }

    if(piecesEaten > totalPieces) {
        console.log(`No more cake left! You need ${piecesEaten - totalPieces} pieces more.`);
    } else if(command === 'STOP' && piecesEaten <= totalPieces) {
           console.log(`${totalPieces - piecesEaten} pieces are left.`);
    } 
}

solve([ '10', '2', '2', '4', '6', 'STOP' ])