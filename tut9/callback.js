console.log('Callback');

// function calculation(num1,num2,callback){
//   return callback(num1,num2);
// }

// function addition (num1,num2){
//   return num1+num2;
// }

// function subtraction (num1,num2){
//   return num1-num2;
// }

// function mult(num1,num2){
//   return num1*num2
// }

// const result = calculation(8,2,mult);

// console.log(result);

// const addTwo = (num1)=>{
//   return num1+2;
// }

// console.log(addTwo(3));
// console.log(addTwo(10));

// const adds = (input1) =>{
//   return input1 + 's'
// }

// console.log(adds('pizza'));
// console.log(adds('bagel'));

// function map (arr, callback){
//   let newArr = [];
//   for (let i = 0; i<arr.length; i++){
//     newArr.push(callback(arr[i]));
//   }
//   return newArr;
// }


// console.log(map ([1,2,3,4],addTwo))


// let alphabet = '';
// function forEach (letters , callback){
//   for(let i =0;i<letters.length;i++){
//     callback(letters[i]);
//   }
//   console.log(alphabet);
// }

// function merge(char){
//   alphabet = alphabet+char;
// }

// forEach(['a','b','c','d'], merge);

// let number = 0;
// function reduce(arr , callback){
//   for(let i =0; i<arr.length; i++){
//     callback(arr[i]);
//   }
//   return number;
// }

// function add(num){
//   number = number+num;
// }

// function multiply(num){
//   number = number * num;
// }



// console.log(reduce([1,2,3,4],multiply));


// callback is function ke andar function


// function one(callback){
//   console.log("this is function one")
//   callback();
// }

// function two(){
//   console.log("this is function two")
// }

// function three(){
//   console.log("this is function three");
// }

// one(three);

// function numbers(num1,num2,callback){
//   return callback(num1,num2);
// }
// function addition(num1,num2){
//   return num1 + num2;
// }

// function subtraction(num1,num2){
//   return num1-num2;
// }

// console.log(numbers(3,5,subtraction));

// ////////// converting to uppercase \\\\\\\\\

// function string_transformation (str, callback){
//   return callback(str);
// }

// function upper_case (str){
//   return str.toUpperCase();
// }

// function lower_case (str){
//   return str.toLowerCase();
// }

// console.log(string_transformation('lowercase',upper_case));
// console.log(string_transformation('UPPERCASE',lower_case));

// ///////// array and callback \\\\\\\\\\\\

// let answer = 0;
// function sequence(arr, callback){
//   for (let i = 0; i<arr.length; i++){
//     callback(arr[i]);
//   }
//   return answer;
// }

// function sum(num1){
//   answer = answer + num1;
// }

// console.log(sequence([1,2,3,4],sum));


// function print_array(arr, callback){
//   for (let i = 0; i<arr.length; i++){
//     callback(i , arr[i]);
//   }
// }

// function list_array(num1 , num2){
//   console.log(`Element${num1}: ${num2}`)
// }

// print_array([23,45,6,775,43], list_array);

const callback_funciton = ()=>{
  console.log ("Hello");
}

const loading_Script = (source, callback)=>{
  let sc = document.createElement("script");
  sc.src = source;
  sc.onload = callback();
  document.head.append(sc);
}

loading_Script("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js", callback_funciton)