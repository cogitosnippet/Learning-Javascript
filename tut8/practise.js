console.log("button");

document.querySelector(".btn1").addEventListener('click', (e)=>{
  alert('Hi I am button1');
})

document.querySelector('.btn2').addEventListener('click', (e)=>{
  alert("Hi I am button2");
})

document.querySelector('.btn3').addEventListener('click',(e)=>{
  alert('Hi I am button3');
})

document.querySelector('.btn4').addEventListener('click',(e)=>{
  alert('Hi I am button4');
})


document.querySelector('.container').style.background = 'black';

setInterval((e)=>{
  document.querySelector('.bulb').classList.toggle('effect');
},1000);

// document.querySelector('.bulb').classList.toggle('effect');