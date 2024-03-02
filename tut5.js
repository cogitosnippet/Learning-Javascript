console.log("tut5");

/*
array methods to practise

toString
join
pop
push
shift
unshift
delete
concat
sort
splice
slice
reverse

*/

let arr = [1,2,3,4];
console.log(arr);

console.log(arr.length);

arr[0]=2345;

console.log(arr, typeof arr);

let arr2 = [3,4,678,9];
console.log(arr2);
console.log(arr2.toString());
console.log(arr2.join(" and "));


// pop last se nikalna
console.log(arr2.pop());
console.log(arr2);


// push last se dalna
arr2.push(2, "Gautam");
console.log(arr2);

//shift aage se nikalna
arr2.shift();
console.log(arr2);

// unshift aage se dalna
arr2.unshift("401953001");
console.log(arr2);

delete arr2[0];
console.log(arr2);

let a1 = [1,2,3,4];
let a2 = [5,6,7,8];
let a3 = [9,10,11,12];

console.log(a1.concat(a2,a3));

arr2.sort();
console.log(arr2);


arr2.splice(1,3,23,34,44,54);
console.log(arr2);

arr2.reverse();
console.log(arr2);

// console.log(arr2.slice(1,3));

let arr_loop = [1,23,14,5,6];

for(let i=0; i<arr_loop.length; i++){
  console.log(arr_loop[i]);
}

console.log("for-each method");

arr_loop.forEach((element,index,arr) => {
  console.log(element,index,arr);
})


console.log("map method");
// console.log(arr_loop.map((e) =>{
//   return e;
// }));

// const modified_arr = arr_loop.map((e,f,g)=>{
//   return e;
// });

arr_loop.map((element,index,arr)=>{
  console.log(element,index,arr);
})

let users = [
  {firstname: 'abc',secondname:'xyz'},
  {firstname: 'abc',secondname:'xyz'},
  {firstname: 'abc',secondname:'xyz'},
]

const user_name = users.map((element)=>{
  return `${element.firstname} ${element.secondname}`;
});

console.log(users);
console.log(user_name);


console.log("filter-method");

// function greater_than_10 (element){
//   if(element>10){
//     return element;
//   }
// }

// console.log(arr_loop.filter(greater_than_10));
const modified_arr = arr_loop.filter((e)=>{
  if(e>10){
    return e;
  }
});

console.log(modified_arr);

console.log("reduce-method");

const add = (a,b)=>{
  return a*b
}

console.log(arr_loop.reduce(add));



function totalVotes(arr) {
  // your code here 
  let count = 0;
  if (arr.voted=='true'){
    count ++;
  }
}

var voters = [
   {name:'Bob' , age: 30, voted: true},
   {name:'Jake' , age: 32, voted: true},
   {name:'Kate' , age: 25, voted: false},
   {name:'Sam' , age: 20, voted: false},
   {name:'Phil' , age: 21, voted: true},
   {name:'Ed' , age:55, voted:true},
   {name:'Tami' , age: 54, voted:true},
   {name: 'Mary', age: 31, voted: false},
   {name: 'Becky', age: 43, voted: false},
   {name: 'Joey', age: 41, voted: true},
   {name: 'Jeff', age: 30, voted: true},
   {name: 'Zack', age: 19, voted: false}
];

let count = 0;

for(let i = 0; i<voters.length; i++){
  if(voters[i].voted="true"){
    count++;
  }
  else{
    count = count+0;
  }
}

console.log(count);



// console.log(totalVotes(voters)); // 7


// function hello_world(name= 'xyz'){
//   console.log(`Hello World , My name is ${name}`);
// }

// hello_world('gautam');
// hello_world();

// const arrow_function = (name, name2= 'xyz') => {
//   console.log(`Hello World, My name is ${name} and my nickname is ${name2}.  This is Arrow Function`);
// }

// arrow_function('gautam','nothing');












// let arr = [1, 23, 4, 5, 10];

// // const square_of_element = (e)=>{
// //   return e**2;
// // }

// // function square_of_element(element){
// //   return element**2
// // }

// function normal_array (element){
//   return element*2;
// }

// console.log(arr.map(normal_array));

// console.log(arr);