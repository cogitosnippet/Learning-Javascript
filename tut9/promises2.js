function get_data(){
  return new Promise((resolve, reject) => {
    let random = Math.random()
    if(random<0.5){
      setTimeout(()=>{
        resolve(455);
      },2000)
    }
    else{
      setTimeout(()=>{
        reject(`404 Not Found`);
      },2000)
    }
  })
}

console.log("promises")

console.log("task1");

console.log("task2");

console.log("get data");

let data = get_data();
// console.log(data);
data.then((v)=>{
  console.log(v);
  console.log("processing data");
  // console.log("doing something else"); 
})

data.catch((err)=>{
  console.log(err);
  console.log("404 NOT FOUND");
})


// console.log("process data");

// console.log("doing something else");