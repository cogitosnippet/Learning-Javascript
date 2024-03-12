// function hello(){
//   console.log("hello");
// }

// async function printing_hello(){
//   await hello();
// }


// function api(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("weather data");
//       resolve(200);
//     },2000)
//   })
// }

// async function getting_weather_data(){
//   await api();
//   await api();
//   await api();
//   await api();
// }


function get_data(data_id){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log("Data",data_id);
      resolve("success");
    },2000)
  })
}

async function data (){
  console.log("getting data 1");
  await get_data(1);
  console.log("getting data 2");
  await get_data(2);
  console.log("getting data 3");
  await get_data(3);
  console.log("getting data 4");
  await get_data(4);
  console.log("getting data 5");
  await get_data(5);
}

(async function (){
  console.log("getting data 1");
  await get_data(1);
  console.log("getting data 2");
  await get_data(2);
  console.log("getting data 3");
  await get_data(3);
  console.log("getting data 4");
  await get_data(4);
  console.log("getting data 5");
  await get_data(5);
})();
// data();

