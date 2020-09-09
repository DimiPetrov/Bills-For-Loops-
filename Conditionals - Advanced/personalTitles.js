function personalTitles([age, gender]) {
    age = Number(age);
    if(age < 16) {
        if(gender === "m") {
            console.log("Master");
        } else if(gender === "f") {
            console.log("Miss");
        }
    } else {
        if(gender === "m") {
        console.log("Mr.");
        } else if (gender === "f") {
        console.log("Ms.");
        }
    }
}

personalTitles([12, "f"])