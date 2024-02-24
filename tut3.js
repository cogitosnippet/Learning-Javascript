console.log("tut3");

for (let i=1; i<=10; i++){
  console.log(2*i);
}

let robot = {
  name: "zyx",
  model: 1234,
  company: "abc"
}

for (const key in robot){
  const element = robot[key];
  console.log(key, element);
}


for (const iterator of "gautam") {
  console.log(iterator);
}


let i = 1;

while(i<10){
  console.log(i);
  i++;
}

let j = 10;
do{
  console.log(j);
  j++;
}while(j<50)

let answer = prompt("Enter your number")
let correct_answer = 100;
if(answer!=correct_answer){
  console.log("try again");
}

else{
  console.log("correct answer");
}

function mean(num_1, num_2, num_3, num_4, num_5){
  return (num_1+num_2+num_3+num_4+num_5)/5;
}

mean_answer = mean(10,20,30,40,50);

console.log(mean_answer);

// let obj ={
//   name: "gautam",
//   role: "programmer",
//   company: "xyx"
// }

// for (const key in obj) {

//   const element = obj[key];
//   console.log(key, element)
// }

// // for (const iterator of object) {
  
// // }


// for (const c of "Gautam") {
//   console.log(c);
// }

// let i = 1;
// while(i<50){
//   console.log(i);
//   i++;
// }

// let j = 1;
// do{
//   console.log(j);
//   j++;
// }while(j<1);

