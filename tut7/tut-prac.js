

document.body.firstElementChild.style.background = "grey";
document.body.children[0].children[0].style.color = "red";


document.body.children[2].firstElementChild.style.background = "yellow";
document.body.children[2].lastElementChild.style.background = "orange";

console.log(document.body.children[3].children[0]);

// document.body.children[3].firstElementChild.style.background = "cyan"


let list = Array.from(document.body.children[3].children);

for(let i =0; i<list.length; i++){
  list[i].style.background = "cyan";
}