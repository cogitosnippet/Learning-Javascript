console.log('tut7');

// console.log(document.body);
// console.log(document.body.childNodes);
// console.log(document.body.childNodes[0]);
// console.log(document.body.childNodes[1].childNodes);

// let cont = document.body.childNodes[1];
// console.log(cont.firstChild);
// console.log(cont.firstElementChild);


// cont.firstElementChild.style.color = "red";
// cont.lastElementChild.style.background = "green";

// console.log(cont.firstElementChild.parentElement);


console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.firstElementChild);
let cont = document.body.firstElementChild;

console.log(cont);

let arr = cont.children;
console.log(arr);



let final_arr = Array.from(arr);
console.log(final_arr);

for(let i=0; i<final_arr.length; i++){
  if(i==2){
    final_arr[i].style.background = "red";
  }
}

// console.log(cont.lastChild);


console.log(document.body.firstElementChild);
document.body.firstElementChild.children[4].previousElementSibling.style.background = "yellow";

console.log(document.body.firstElementChild);