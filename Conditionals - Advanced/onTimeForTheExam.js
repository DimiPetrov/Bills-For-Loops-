function solve(arg1, arg2, arg3, arg4) {
    let examHours = Number(arg1);
    let examMinutes = Number(arg2);
    let arrivalHours = Number(arg3);
    let arrivalMinutes = Number(arg4);

    let late = "Late";
    let onTime = "On time";
    let early = "Early";

    let examTime = (examHours * 60) + examMinutes;
    let arrivalTime = (arrivalHours * 60) + arrivalMinutes;
    let totalMinutesDifference = arrivalTime - examTime;

    let studentArrival = late;
    if(totalMinutesDifference < -30) {
        studentArrival = early;
    } else if(totalMinutesDifference <= 0) {
        studentArrival = onTime;
    }
    let result = "";
    if(totalMinutesDifference != 0) {
        let hoursDifference = Math.abs(~~(totalMinutesDifference / 60));
        let minutesDifference = Math.abs(totalMinutesDifference % 60);
        if(hoursDifference > 0) {
            result = hoursDifference + ":" + (minutesDifference > 9 ? minutesDifference : "0" + minutesDifference) + " hours";
        } else {
            result = minutesDifference + " minutes";
        }
        if(totalMinutesDifference < 0) {
            result += " before the start";
        } else {
            result += " after the start";
        }
    }
    console.log(studentArrival);
    if(result) {
        console.log(result);
    }
}

solve(11, 30, 12, 29)