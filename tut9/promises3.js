// console.log("promise");

// // let promise = new Promise((resolve,reject)=>{
// //   reject(123);
// // })


// function get_data(data_id){
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       // console.log("Data",data_id);
//       // resolve(123);
//       reject("error");
//     },5000);
//   })
// }

function async_func(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Data retrieved");
      resolve("success");
    },5000)
  })
}

// function async_func2(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("Data ");
//       resolve("success");
//     },5000)
//   })
// }

console.log("Fetching Data1");
let p1 = async_func();
p1.then((res)=>{
  console.log(res);
  console.log("Fetching Data2");
  let p2 = async_func();
  p2.then((res)=>{
    console.log(res);
    console.log("Fetching Data3");
    let p3 = async_func();
    p3.then((res)=>{
      console.log(res);
      console.log("Fetching Data4");
      let p4 = async_func();
      p4.then((res)=>{
        console.log(res);
      })
    })
  })
})






// console.log("Fetching Data2");
// let p2 = async_func2();
// p2.then((res)=>{
//   console.log(res);
// })