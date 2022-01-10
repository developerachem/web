const day = document.querySelector('#day');
const date = new Date();

setInterval(() => {
   let daay = date.getDay();
   if (daay === 0) {
      return day.children[1].classList.add('bg-danger');
   } else if (daay === 1) {
      return day.children[2].classList.add('bg-danger');
   } else if (daay === 2) {
      return day.children[3].classList.add('bg-danger');
   } else if (daay === 3) {
      return day.children[4].classList.add('bg-danger');
   } else if (daay === 4) {
      return day.children[5].classList.add('bg-danger');
   } else if (daay === 5) {
      return day.children[6].classList.add('bg-danger');
   } else if (daay === 6) {
      return day.children[0].classList.add('bg-danger');
   }
}, 1000)



const runer = document.querySelector('.runer');
let def = 90;
let startValue = 0;
setInterval(() => {
   if (def === startValue) {
      clearInterval()
   } else {
      startValue++;
      runer.innerHTML = startValue + "%";
   }
}, 10)



const counter = document.querySelector('#body');
//const inim = document.querySelector('#inim');
const box = document.querySelector('.box');

let s = date.getSeconds();

let countValue = 59;
let defaultValue = s;
setInterval(() => {

   if (defaultValue === countValue) {
      defaultValue = 0
   } else {
      defaultValue++;
      counter.innerHTML = defaultValue;

   }

}, 1000)



let sercelValue = date.getHours() / 60;
let sercelDefultValue = date.getHours();
setInterval(() => {
   if (sercelDefultValue === sercelValue) {
      sercelDefultValue = 0;
   } else {
      sercelDefultValue++;
      box.style.background = `conic-gradient( blue ${sercelDefultValue * 3.6}deg, green ${sercelDefultValue * 3.6}deg )`
   }

}, 1000)