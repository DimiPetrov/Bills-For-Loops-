function calculation([type1, type2, arg1]) {
    let size = type1;
    let colour = type2;
    let sets = Number(arg1);

    if(size === "Large") {
        switch(colour) {
            case "Red": price = (sets * 16) * 0.65; break;
            case "Green": price = (sets * 12) * 0.65; break;
            case "Yellow": price = (sets * 9) * 0.65; break;
        }
    } else if(size === "Medium") {
        switch(colour) {
            case "Red": price = (sets * 13) * 0.65; break;
            case "Green": price = (sets * 9) * 0.65; break;
            case "Yellow": price = (sets * 7) * 0.65; break;
        }
    } else if(size === "Small") {
        switch(colour) {
            case "Red": price = (sets * 9) * 0.65; break;
            case "Green": price = (sets * 8) * 0.65; break;
            case "Yellow": price = (sets * 5) * 0.65; break;
        }
    }
          console.log(`${price.toFixed(2)} leva.`);
}

calculation(["Small", "Yellow", 3])