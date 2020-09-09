function solve(arg1, arg2, arg3) {
    let difficulty = Number(arg1);
    let rotation = Number(arg2);
    let pages = Number(arg3);

    if(difficulty >= 80 && rotation >= 80 && pages >= 8) {
        category = 'Legacy';
    } else if(difficulty >= 80 && rotation <= 10) {
        category = 'Master';
    } else if(rotation >= 50 && pages >= 2) {
        category = 'Hard';
    } else if(difficulty <= 30 && pages <= 1) {
        category = 'Easy';
    } else if(difficulty <= 10) {
        category = 'Elementary';
    } else {
        category = 'Regular';
    }
       
       console.log(category);
}

solve(80, 40, 3)