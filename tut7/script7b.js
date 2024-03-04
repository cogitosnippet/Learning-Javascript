console.log("hello");

// console.log(document.getElementsByClassName('box'));

// let element = document.getElementsByClassName('box');

// element[2].style.background= "yellow";

// document.getElementById('color-box').style.background = 'blue';
console.log(document.getElementsByClassName('box'));
console.log(document.querySelectorAll('.box')); 


// let elements = Array.from(document.getElementsByClassName('box'));

// for(let i = 0; i<elements.length; i++){
//   if(i!=3){
//     elements[i].style.background = 'green'
//   }
// }


// document.getElementsByClassName('box').forEach(e=>{
//   e.style.color = "red";
// })


// document.querySelector('.box').style.background = "green";

document.querySelectorAll('.box').forEach(e =>{
  e.style.background = "green";
})

// element[1].nextElementSibling.style.background= "yellow";
