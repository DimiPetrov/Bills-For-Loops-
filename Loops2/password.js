function password(input) {
   let index = 0;
   let username = input[index];
   index++;

   let password = input[index];
   index++;

   let enterPassword = input[index];
   index++;

   while(enterPassword != password) {
       enterPassword = input[index];
       index++;
   }

   console.log(`Welcome ${username}!`);
}

password(['Gosho', 'secret', 'secret'])