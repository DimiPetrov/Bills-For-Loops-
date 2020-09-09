function solve(type1, arg1, arg2) {
     let flower = type1;
     let num = Number(arg1);
     let season = arg2;

     if(season === 'Spring') {
         switch(flower) {
             case 'Sunflower': honey = num * 10; break;
             case 'Daisy': honey = num * 12 * 1.1; break;
             case 'Lavender': honey = num * 12; break;
             case 'Mint': honey = num * 10 * 1.1; break;  
        }
    } else if(season === 'Summer') {
        switch(flower) {
            case 'Sunflower': honey = num * 8 * 1.1; break;
            case 'Daisy': honey = num * 8 * 1.1; break;
            case 'Lavender': honey = num * 8 * 1.1; break;
            case 'Mint': honey = num * 12 * 1.1; break;  
       }
    } else if(season === 'Autumn') {
        switch(flower) {
            case 'Sunflower': honey = num * 12 * 0.95; break;
            case 'Daisy': honey = num * 6 * 0.95; break;
            case 'Lavender': honey = num * 6 * 0.95; break;
            case 'Mint': honey = num * 6 * 0.95; break;  
       }
    }
    console.log(`Total honey harvested: ${honey.toFixed(2)}`);
}

solve('Sunflower', 11, 'Autumn')