console.log("practise");

/// callback practise


const callback_function = (data_id)=>{
  return new Promise((resolve,reject)=>{
    setTimeout((e)=>{
      console.log("data retrieved",data_id);
      resolve("success");
    },5000)
  })
}

// let p1 = callback_function(2);
// p1.then((res)=>{
//   console.log(res);
// });

console.log("getting data2");
callback_function(2).then((res)=>{ 
  
  callback_function(3).then((res)=>{
    callback_function(4).then((res)=>{
      console.log("getting data4");
      console.log(res);
    })
  })
})

// callback_function(3).then((res)=>{
//   console.log(res);
// })

// callback_function(1,()=>{
//   callback_function(2,()=>{
//     callback_function(3,()=>{
//       callback_function(4,()=>{
//         callback_function(5);
//       })
//     })
//   });
// });

//// practise promise 
//// promise is basically hume api se promise aata hai that you will get data within interval time annd it is either rejected or resolved and accordingly then and cath statement


// function promise_practise(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("data retrieved ");
//       resolve("Success");
//     },4000)
//   })
// }

// console.log("fetching data1");
// let p1 = promise_practise();
// p1.then((res)=>{
//   console.log(res);
//   console.log("fetching data2");
//   let p2 = promise_practise();
//   p2.then((res)=>{
//     console.log(res);
//     console.log("fetching data3");
//     let p3 = promise_practise();
//     p3.then((res)=>{
//       console.log(res);
//       console.log("fetching data4");
//       let p4 = promise_practise();
//       p4.then((res)=>{
//         console.log(res);
//       })
//     })
//   })
// })

// console.log("fetching data2");
// let p2 = promise_practise2()
// p2.then((res)=>{
//   console.log(res);
// })

