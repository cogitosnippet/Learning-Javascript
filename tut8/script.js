console.log("hello");

let div = document.createElement('div');
div.setAttribute('class', 'alert');
div.innerHTML = "Hi I am at the end of <b>container</b>";
document.querySelector('.container').append(div);

let div1 = document.createElement('div');
div1.setAttribute('class', 'alert');
div1.innerHTML = "Hi I am at the start of <b>container</b>";
document.querySelector('.container').prepend(div1);

// let div2 = document.createElement('div');
// div2.attributes('class', 'alert');
// div2.innerHTML = "Hi I am before the container";
// document.querySelector('.container').before(div2);

let div2 = document.createElement('div');
div2.setAttribute('class', 'alert');
div2.innerHTML = "Hi I am before the container";
document.querySelector('.container').before(div2);

let div3 = document.createElement('div');
div3.setAttribute('class', 'alert');
div3.innerHTML = "Hi I am after the container";
document.querySelector('.container').after(div3);



///////////////////INSERT ADJACENT HTML////////////////////

document.querySelector('.container').insertAdjacentHTML("beforebegin", '<p>Hi I am HTML and I am before begining of container')

document.body.children[2].insertAdjacentHTML("afterbegin", '<p>Hi I am text and I am HTML the beginning of the container');

document.querySelector('.container').insertAdjacentHTML("beforeend", '<p>Hi I am HTML and I before the end of container');

document.querySelector('.container').insertAdjacentHTML("afterend", '<p>Hi I am HTML and I am after the end of the container');

// document.querySelector('.container').style.background = 'cyan';


///////////////////INSERT ADJACENT TEXT////////////////////

document.querySelector('.container').insertAdjacentText("beforebegin", '<p>Hi I am text and I am before the beginnning of the container</p>');


///////////////////INSERT ADJACENT Element////////////////////

let adj_el = document.querySelector('.ex-shift');
document.querySelector('.container').insertAdjacentElement("afterend", adj_el);

////////////////////////////
// let e = document.querySelector('.container');

// e.classList.add('red');
// e.classList.remove('red');

document.querySelector('.container').classList.add('red');
document.querySelector('.container').classList.remove('red');
document.querySelector('.container').classList.toggle('red');
document.querySelector('.container').classList.toggle('red');


document.querySelector('.container').classList.contains('red');