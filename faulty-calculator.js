console.log("faulty-calculator");

/*
calculator does following: 

1. It takes two number as input from users.
2. It performs wrong operations:-

+ ----->> -
* ----->> +
- ----->> /
/ ----->> **

and it perform wrong operations 10% of times
*/

let first_number = prompt("Enter your first number");
let second_number = prompt("Enter your second number");
let operation = prompt("Enter your operation");

let random = Math.random()

let object = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
}


if(random>0.1){

  operation = object[operation];
  console.log(`Answer is ${eval(`${first_number}${operation}${second_number}`)}`);
}

else{
  console.log(`Answer is ${eval(`${first_number}${operation}${second_number}`)}`);
}

// let object = {
//   name: "gautam",
//   roll: "401953001"
// }

// alert(`${object.name}`);

// if(random<0.1){
//   if(operation=="+"){
//     console.log(first_number-second_number);
//   }
  
//   else if(operation=="*"){
//     console.log(first_number+second_number);
//   }
  
//   else if(operation=="-"){
//     console.log(first_number/second_number);
//   }
  
//   else if(operation=="/"){
//     console.log(first_number**second_number);
//   }
// }

// else{
//   if(operation=="+"){
//     console.log(first_number+second_number);
//   }
  
//   else if(operation=="*"){
//     console.log(first_number*second_number);
//   }
  
//   else if(operation=="-"){
//     console.log(first_number-second_number);
//   }
  
//   else if(operation=="/"){
//     console.log(first_number/second_number);
//   }
// }



