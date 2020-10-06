/*window.onload = function () {
  alert('welcome to my Ecommerce');
  console.log('welcome to my Ecommerce');
};

const text = document.querySelector('.title');

const changeColor = document.querySelector('.changeColor');

const changeBgcolor = document.querySelector('.changeBgColor');

const body = document.querySelector('body');

changeColor.addEventListener('click', function () {
  text.classList.add('change');
});*/

let btn = document.querySelector('button');

let title = document.querySelector('#header h1');

btn.onclick = function () {
  title.innerText = 'ciao';
};

title.onmouseover = function () {
  title.classList.add('color');
};

title.onmouseleave = function () {
  title.classList.remove('color');
};

let pChild = document.querySelector('div p');
const changePContent = function () {
  pChild.innerText = 'woooooooooooooooooooooooooooo!';
};

let lisTitle = document.querySelector('#listTitle');
const changeListTitle = function (content) {
  lisTitle.innerText = 'ricetta';
};

let list2 = document.querySelectorAll(ul)[1];
const addToTheSecond = function (content) {};
