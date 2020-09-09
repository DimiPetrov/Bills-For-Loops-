function solve(input){
let  target = input.shift();
let sumPrice = 0;
let command = input.shift();
    while(command!=`Party!`){
let nameCoctail = command;
let numCoctails = Number(input.shift());
let price = (nameCoctail.length);
let sum = price * numCoctails;
if(sum % 2 != 0){
    sum = sum - (sum * 0.25);
}else{

}
sumPrice+=sum
if (sumPrice >= target) {
    break;
}

 command=input.shift()
    }

    if(command==`Party!`){

        console.log(`We need ${(target - sumPrice).toFixed(2)} leva more.`)
    } else if(sumPrice >= target){
        console.log(`Target acquired.`)
    }
    console.log(`Club income - ${sumPrice.toFixed(2)} leva.`)
}

solve([ '500', 'Bellini', '6', 'Bamboo', '7', 'Party!' ])