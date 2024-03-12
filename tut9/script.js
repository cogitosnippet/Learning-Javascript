
// console.log("Gautam");
// console.log("Game");

// setTimeout((e)=>{
//   console.log("Hi I am inside timeout")
// }, 2000);

// console.log("after timeout");

// const callback = (arg)=>{
//   alert(`${arg}`);
// }

// const loadScript = (src, callback)=>{
//   let sc = document.createElement('script');
//   sc.src = src;
//   sc.onload = callback("Gautam"); 
// }

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js',callback)


// function greet (parameter, callback){
//   callback();
//   console.log(`Hi my name is ${parameter}`)
// }

// function callMe(){
//   console.log("I am a callback function");
// }

// greet('Gautam', callMe);


function greet(){
  console.log("Hello world");
}

function name_(arg){
  console.log(`My name is ${arg}`);
}

setTimeout(greet, 3000);
name_('Gautam')