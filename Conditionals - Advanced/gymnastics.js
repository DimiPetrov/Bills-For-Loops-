function solve([type1, type2]) {
    let team = type1;
    let gymnasticDevice = type2;

    if(team === "Russia") {
        switch(gymnasticDevice) {
            case "ribbon": difficulty = 9.100; performance = 9.400; break;
            case "hoop": difficulty = 9.300; performance = 9.800; break;
            case "rope": difficulty = 9.600; performance = 9.000; break;
        }
    } else if(team === "Bulgaria") {
        switch(gymnasticDevice) {
            case "ribbon": difficulty = 9.600; performance = 9.400; break;
            case "hoop": difficulty = 9.550; performance = 9.750; break;
            case "rope": difficulty = 9.500; performance = 9.400; break;
        }       
    } else if(team === "Italy") {
        switch(gymnasticDevice) {
            case "ribbon": difficulty = 9.200; performance = 9.500; break;
            case "hoop": difficulty = 9.450; performance = 9.350; break;
            case "rope": difficulty = 9.700; performance = 9.150; break;
        }
    }
    let maximumScore = 20;
    score = difficulty + performance;
    percent = ((maximumScore - score) / maximumScore) * 100;
    console.log(`The team of ${team} get ${score.toFixed(3)} on ${gymnasticDevice}.`);
    console.log(`${percent.toFixed(2)}%`);
}

solve(["Italy", "hoop"])