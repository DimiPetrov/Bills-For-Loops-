function fruitShop(arg1, arg2, arg3) {
    let fruit = arg1;
    let day = arg2;
    let quantity = Number(arg3);
    let result = 0;
    let isError = false;

    if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" ) {
       switch(fruit) {
           case "banana": result = quantity * 2.5;break;
           case "apple": result = quantity * 1.2;break;
           case "orange": result = quantity * 0.85;break;
           case "grapefruit": result = quantity * 1.45;break;
           case "kiwi": result = quantity * 2.7;break;
           case "pineapple": result = quantity * 5.5;break;
           case "grapes": result = quantity * 3.85;break;
           default: isError = true;
       }
    } else if (day === "Saturday" || day === "Sunday") {
        switch(fruit) {
            case "banana": result = quantity * 2.7;break;
            case "apple": result = quantity * 1.25;break;
            case "orange": result = quantity * 0.9;break;
            case "grapefruit": result = quantity * 1.6;break;
            case "kiwi": result = quantity * 3.0;break;
            case "pineapple": result = quantity * 5.6;break;
            case "grapes": result = quantity * 4.2;break;
            default: isError = true;
        }
    }  else {
    isError = true;
   }

   if(!isError) {
       console.log(result.toFixed(2));
   } else {
       console.log("error");
   }
}

fruitShop("tomato", "Monday", 0.5)