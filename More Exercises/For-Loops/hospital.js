function solve(input) {
    let days = Number(input.shift());
    let treated = 0;
    let untreated = 0;
    let doctors = 7;
    let patients = Number(input.shift());

    for(let i = 1; i <= days; i++) {       
        if(patients <= doctors) {
        treated += patients;
        } else {
        treated += doctors;
        untreated += patients - doctors;
        }
        if(i % 3 === 0 && treated < untreated) {
            doctors++;
        }
        patients = Number(input.shift());
    }
        console.log(`Treated patients: ${treated}.`);
        console.log(`Untreated patients: ${untreated}.`);
}

solve([ '4', '7', '27', '9', '1' ])