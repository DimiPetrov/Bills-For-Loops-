function cinema(type, rows, columns) {
    rows = Number(rows);
    columns = Number(columns);
    let income = 0;

    if(type === "Premiere") {
        income = rows * columns * 12.0;
    } else if(type === "Normal") {
        income = rows * columns * 7.50;
    } else if(type === "Discount") {
        income = rows * columns * 5.00;
    }
    console.log(`${income.toFixed(2)} leva`)
}

cinema("Discount", 12, 30)