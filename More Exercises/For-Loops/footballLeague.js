function solve(input) {
    let capacity = Number(input.shift());
    let totalFans = Number(input.shift());
    let a = 0;
    let b = 0;
    let v = 0;
    let g = 0;

    for(let i = 1; i <= totalFans; i++) {
        let fan = input.shift();
        if(fan === 'A') {
            a++;
        } else if(fan === 'B') {
            b++;
        } else if(fan === 'V') {
            v++;
        } else if(fan === "G") {
            g++;
        }
    }
    console.log(`${(a / totalFans * 100).toFixed(2)}%`);
    console.log(`${(b / totalFans * 100).toFixed(2)}%`);
    console.log(`${(v / totalFans * 100).toFixed(2)}%`);
    console.log(`${(g / totalFans * 100).toFixed(2)}%`);
    console.log(`${(totalFans / capacity * 100).toFixed(2)}%`);
}

solve([
    '76', '10', 'A', 'V',
    'V',  'V',  'G', 'B',
    'A',  'V',  'B', 'B'
  ]
  )