function solve(input) {
    let index = 0;
   let seats = Number(input[index++]);
   let usedSeats = 0;
   let income = 0;

   while(true) {
    let command = input[index++];
    if(command === 'Movie time!') {
        console.log(`There are ${seats - usedSeats} seats left in the cinema.`);
        break;
    }
    
    let people = Number(command);
       if(usedSeats + people > seats) {
        console.log(`The cinema is full.`);
        break;
       } 

       usedSeats += people;
       income += command * 5;
       if(people % 3 === 0) {
           income -= 5;
       }
   }
       console.log(`Cinema income - ${income} lv.`);

}

solve([ '60', '10', '6', '3', '20', '15', 'Movie time!' ])