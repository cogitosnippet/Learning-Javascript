console.log("EventListener")


// document.querySelector('.btn').addEventListener('click', (e)=>{
//   // document.querySelector('.para').textContent = "I have been changed"
//   alert('Button Pressed');
// })

// document.querySelector('.btn').addEventListener('contextmenu', (e)=>{
//   // document.querySelector('.para').textContent = "I have been changed"
//   alert('Button Pressed');
// })

// document.querySelector('.btn').addEventListener('mouseover', (e)=>{
//   // document.querySelector('.para').textContent = "I have been changed"
//   alert('Button Pressed');
// })


// document.addEventListener('keyup', (e)=>{
//   // document.querySelector('.para').textContent = "I have been changed"
//   alert(`${e.key} Pressed`);
// })


document.querySelector('.grandfather').addEventListener('click', (e)=>{
  alert("I am grandfather");
})

document.querySelector('.father').addEventListener('click', (e)=>{
  e.stopPropagation();
  alert("I am father");
})

document.querySelector('.child').addEventListener('click', (e)=>{
  e.stopPropagation();
  alert("I am child");
})

function random_color(){
  let red = Math.ceil(Math.random()*255);
  let green = Math.ceil(Math.random()*255);
  let blue = Math.ceil(Math.random()*255);

  return `rgb(${red},${green},${blue})`
}

// setTimeout(() => {
//   document.querySelector('.father').style.background = random_color();
// }, 5000);

let id = setInterval(()=>{
  document.querySelector('.child').style.background = random_color();
  document.querySelector('.father').style.background = random_color();
  document.querySelector('.grandfather').style.background = random_color();

}, 1000)

// clearinterval(id)