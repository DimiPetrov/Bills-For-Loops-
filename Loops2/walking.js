function walking(input) {
    let index = 0;
    let steps = input[index];
    let totalSteps = 0;
    let isGoalReached = false;
    let isGoingHome = false;
    while (!isGoingHome) {
        if (steps === "Going home") {
            isGoingHome = true;
            let stepsToHome = Number(input[index + 1]);
            totalSteps += stepsToHome;
        } else {
            totalSteps += Number(steps);
            index++;
            steps = input[index];
        }

        if(totalSteps >= 10000){
            isGoalReached = true;
            break;
        }
    }
    if(isGoalReached){
        console.log("Goal reached! Good job!");
    }else{
        let neededSteps = 10000 - totalSteps;
        console.log(neededSteps + " more steps to reach goal.");
    }
}

walking(["1000", "1500", "2000", "Going home", "300"]);
