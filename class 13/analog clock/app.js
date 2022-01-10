const munit = document.querySelector('#mn');
const hours = document.querySelector('#hr');
const secend = document.querySelector('#sec');
//let deg = 6;



setInterval(() => {
    let curendDate = new Date();
    let hh = curendDate.getHours() * 30;
    let mm = curendDate.getMinutes() * 6;
    let ss = curendDate.getSeconds() * 6;

    hours.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    munit.style.transform = `rotateZ(${mm}deg)`;
    secend.style.transform = `rotateZ(${ss}deg)`;


}, 1000)