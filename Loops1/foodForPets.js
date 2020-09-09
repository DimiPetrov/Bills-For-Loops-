function foodForPets([arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8]) {
    let days = Number(arg1);
    let totalFood = Number (arg2);
    let dogDay1 = Number(arg3);
    let catDay1 = Number(arg4);
    let dogDay2 = Number(arg5);
    let catDay2 = Number(arg6);
    let dogDay3 = Number(arg7);
    let catDay3 = Number(arg8);

    let biscuits = Math.round((dogDay3 + catDay3) * 0.1);
    let dogEaten = dogDay1 + dogDay2 + dogDay3;
    let catEaten = catDay1 + catDay2 + catDay3;
    let totalEaten = dogEaten + catEaten;
    let percentEaten = ((totalEaten / totalFood) * 100).toFixed(2);
    let dogPercent = ((dogEaten / totalEaten) * 100).toFixed(2);
    let catPercent = ((catEaten / totalEaten) * 100).toFixed(2);

    console.log(`Total eaten biscuits: ${biscuits}gr.`);
    console.log(`${percentEaten}% of the food has been eaten.`);
    console.log(`${dogPercent}% eaten from the dog.`);
    console.log(`${catPercent}% eaten from the cat.`);

}

foodForPets([3, 500, 100, 30, 110, 25, 120, 35])