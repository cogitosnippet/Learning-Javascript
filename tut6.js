console.log("tut6");

// console.error("error");
// alert("hello");
// prompt("What are you saying ?","Nothing");
// confirm("Please Confrim");

// document.body.style.background = 'green';

// location.href="https://chat.openai.com/";



///////////////////////// Q1,2 ////////////////////////////////////

let question = ()=>{
  let age = prompt("Enter your age, Please");

  if(age>=18){
    alert('You are eligible for driving');
  }
  else{
    alert('You are not eligible for driving');
  }
}


// question();


// let repeat = confirm("Do you want to see prompt again");
// if(repeat=true){
//   question()
// }


///////////////////////// Q3 ////////////////////////////////////


let question_ = ()=>{
  let age = prompt("Enter your age, Please");

  if(age>=18){
    alert('You are eligible for driving');
  }
  else if(age<0){
    console.error("error");
  }
  else{
    alert('You are not eligible for driving');
  }
  
}

// question_();

let question_4 = ()=>{
  let number = prompt("Enter number");

  if(number>4){
    location.href="https://www.google.com/";
  }
}

// question_4();

let color = prompt("Enter a valid color");

document.body.style.backgroundColor = color ;






