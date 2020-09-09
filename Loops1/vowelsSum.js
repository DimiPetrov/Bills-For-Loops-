function solve(input) {
    let result = 0;
    for (i = 0; i < input.length; i++) {
        switch(input[i]) {
            case "a": result +=1; break;
            case "e": result +=2; break;
            case "i": result +=3; break;
            case "o": result +=4; break;
            case "u": result +=5; break;
        }
    }
       console.log(result);
}

solve("beer")