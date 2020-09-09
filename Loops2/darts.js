function darts(input) {
    let index = 0;
    let player = input[index++];

    let points = 301;   
    let successfullShots = 0;
    let unsuccessfulShots = 0;

    let command = input[index++];

    while((command !== 'Retire') && points !== 0) {
        let shot = Number(input[index++]);
        if(command === 'Double') {
            shot *= 2;
        } else if(command === 'Triple'){
            shot *= 3;
        }

        if(points >= shot) {
        points -= shot;
        successfullShots++;
        } else {
        unsuccessfulShots++;
        }
        
        command = input[index++];

    }
 
    if(points === 0) {
       console.log(`${player} won the leg with ${successfullShots} shots.`);
    } else if(command === 'Retire') {
        console.log(`${player} retired after ${unsuccessfulShots} unsuccessful shots.`);
    }
 }
 
 darts(['Michael van Gerwen', 'Triple', '20', 'Triple', '19', 'Double', '10', 'Single', '3', 'Single', '1', 'Triple', '20', 'Triple', '20', 'Double', '20'])