function solve(arg1, arg2, type1) {
    let task = Number(arg1);
    let points = Number(arg2);
    let course = type1;

    let totalPoints;

    if(course === 'Basics') {
        switch(task) {
            case '1': totalPoints = points * 0.08 * 0.8; break;
            case '2': totalPoints = points * 0.09; break;
            case '3': totalPoints = points * 0.09; break;
            case '4': totalPoints = points * 0.10; break;
        }
    } else if(course === 'Fundametnals') {
        switch(task) {
            case '1': totalPoints = points * 0.11; break;
            case '2': totalPoints = points * 0.11; break;
            case '3': totalPoints = points * 0.12; break;
            case '4': totalPoints = points * 0.13; break;
       }
    } else if(course === 'Advanced') {
        switch(task) {
            case '1': totalPoints = points * 0.14 * 1.2; break;
            case '2': totalPoints = points * 0.14 * 1.2; break;
            case '3': totalPoints = points * 0.15 * 1.2; break;
            case '4': totalPoints = points * 0.16 * 1.2; break;
       }    
    }
    console.log(`Total points: ${totalPoints.toFixed(2)}`);
}

solve(1, 100, 'Basics')