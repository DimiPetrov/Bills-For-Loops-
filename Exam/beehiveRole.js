function solve(arg1, arg2, type1) {
    let iq = Number(arg1);
    let power = Number(arg2);
    let gender = type1;

    let role = '';

    if(iq >= 80 && power >= 80 && gender === 'female') {
        role = 'Queen Bee';
    } else if(iq >= 80) {
        role = 'Repairing Bee';
    } else if(iq >= 60 && iq < 80) {
        role = 'Cleaning Bee';
    } else if(power >= 80 && gender === 'male') {
        role = 'Drone Bee';
    } else if(power >= 60 && power < 80) {
        role = 'Guard Bee';
    } else {
        role = 'Worker Bee';
    }
    console.log(role);
}

solve(82, 81, 'female')