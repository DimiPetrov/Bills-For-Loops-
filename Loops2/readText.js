function readText(input) {
   let text = input.shift();
   let count = 0;
   
   while(text != 'Stop') {
       count++;
       text = input.shift();
   }
   console.log(count);
}

readText(['Sofia', 'Berlin', 'Moscow', 'Athens', 'Madrid', 'London', 'Paris', 'Stop'])
 

