function skiTrip(arg1, arg2, arg3) {
    let day = Number(arg1);
    let typeRoom = arg2;
    let grade = arg3;
    let result = 0;
   
    switch(typeRoom) {
        case "room for one person":
             result = (day - 1) * 18;
            break;
        case "apartment":
             result = (day - 1) * 25;
            if(day < 10) {
            result = result * 0.7;
        } else if(day >= 10 && day < 15) {
            result = result * 0.65;
        }  else {
            result = result * 0.5;
        }
            break;
        case "president apartment":
            result = (day - 1) * 35;
            if(day < 10) {
                result = result * 0.9;
            } else if(day >= 10 && day < 15) {
                result = result * 0.85;
            }  else {
                result = result * 0.8;
            }
                break;
        }
    if(grade === "positive") {
        result = result * 1.25
    } else if(grade === "negative") {
        result = result * 0.9;
    }
      console.log(result.toFixed(2));
}

skiTrip(12, "room for one person", "positive")