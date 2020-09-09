function solve(input) {

    let destination = input.shift();
    let minimumBudget = Number(input.shift());
    let command = input.shift();
    let savings = 0;

    while (command != "End" && command != undefined) {

        while (savings < minimumBudget) {

            savings += Number(command);


            if (savings >= minimumBudget) {
                console.log(`Going to ${destination}!`);
                destination = input.shift();
                if (destination == "End") {
                    command = destination;
                    break;
                }
                minimumBudget = Number(input.shift());
                savings = 0;
                command = input.shift();
                break;
            } else {
                command = input.shift();
            }
        }
    }
}

solve([
    'Greece', '1000', '200',
    '200', '300', '100',
    '150', '240', 'Spain',
    '1200', '300', '500',
    '193', '423', 'End',
    ''
])