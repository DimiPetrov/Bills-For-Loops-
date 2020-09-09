function solve(arg) {
    let n = Number(arg);
    for (let i = 0; i <= n; i += 2) {
        console.log(2 ** i);
    }
}

solve(5)