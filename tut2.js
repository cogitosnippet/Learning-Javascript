console.log("tut2");

let age = 15;

if(age>10 && age<20){
  console.log(true);
}

else{
  console.log(false)
}


let number = 6;

if(number%2==0 && number%3==0){
  console.log("yes number is divisible by 2 and 3");
}

else{
  console.log("no number is not divisible by 2 and 3");

}

number_2 = 7;

if(number_2%2==0 || number_2%3==0){
  console.log("yes number is divisible by 2 or 3");
}

else{
  console.log("no number is not divisible by 2 or 3");

}


// using normal if statement
let driving_age = 18;

if(driving_age>=18){
  console.log("yes you can drive");
}

else{
  console.log("no you can not drive");
}

// using ternary operator

driving_age >= 18 ? console.log("yes you can drive") : console.log("no you can not drive");