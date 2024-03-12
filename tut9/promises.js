console.log("promises");

// let prom1 = new Promise((resolve, reject) => {
//   let random = Math.random()

//   if(random<0.5){
//     reject("I am rejected");
//   }
//   else{
//       setTimeout(()=>{
//       console.log("I am done");
//       resolve("I am resolved");
//     }, 2000)
//   } 
// })

// prom1.then((a)=>{
//   console.log(a);
// })

// prom1.catch((err)=>{
//   console.log(err);
// })

// let prom2 = new Promise((resolve, reject) => {
  
// })


let prom1 = new Promise((resolve, reject) => {
  let random = Math.random();
  if(random<0.5){
    resolve("Now this is resolved");
  }
  else{
    // reject("Now this is rejected");
    setTimeout(()=>{
      reject("Now this is rejected");
    }, 1000)
  }
})

let prom2 = new Promise((resolve, reject) => {
  let random = Math.random();
  if(random<0.5){
    resolve("Now this is resolved 2");
  }
  else{
    reject("Now this is rejected 2");
  }
})

let prom3 = new Promise((resolve, reject) => {
  let random = Math.random();
  if(random<0.5){
    resolve("Now this is resolved 2");
  }
  else{
    reject("Now this is rejected 2");
  }
})

let prom4 = new Promise((resolve, reject) => {
  let random = Math.random();
  if(random<0.5){
    resolve("Now this is resolved 2");
  }
  else{
    reject("Now this is rejected 2");
  }
})


let prom5 = new Promise((resolve, reject) => {
  let random = Math.random();
  if(random<0.5){
    resolve("Now this is resolved 2");
  }
  else{
    reject("Now this is rejected 2");
  }
})

// let p = Promise.all([prom1,prom2]);
// let p = Promise.allSettled([prom1,prom2]);
let p = Promise.race([prom1,prom2,prom3,prom4,prom5]);


p.then((arg)=>{
  console.log(arg);
}).catch(arg=>{
  console.log(arg);
})