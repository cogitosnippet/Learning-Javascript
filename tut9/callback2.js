console.log("callback2");

// const calculator = (num1,num2, callback)=>{
//   return callback(num1,num2);

// }

// const add = (num1,num2)=>{
//   console.log(num1+num2);
// }

// const multiply = (a,b)=>{
//   let answer = a*b
//   return answer ;
// }
// calculator(2,5,add);
// // calculator(2,5,multiply);


// calculator(2,5,multiply)

function get_data(dataid, get_next_Data){
  setTimeout((e)=>{
    console.log("Data", dataid);
    if(get_next_Data){ 
      get_next_Data();
    }
  },2000)
}

get_data(1,()=>{
  get_data(2,()=>{
    get_data(3,()=>{
      get_data(4,()=>{
        get_data(5,()=>{
          get_data(6,()=>{
            get_data(7,()=>{
              get_data(8,()=>{
                get_data(9,()=>{
                  get_data(10,()=>{
                    get_data(11);
                  })
                })
              })
            })
          })
        })
      })
    })
  });
});
// get_data(2);
// get_data(3);

