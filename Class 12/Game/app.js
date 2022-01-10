let wrapper = document.querySelector('.wrapper');
let box = document.querySelectorAll('.box');
box.forEach((get, i) => {
    get.onclick = () => {
        let random = (Math.floor((Math.random() * 9)));
        if (random == i) {
            get.style.background = 'green';
            get.innerHTML = '<h4 style="color:white; text-align:center; line-height:150px;">Correct</h4>';
        } else {
            get.style.background = 'red';
            get.innerHTML = '<h4 style="color:white; text-align:center; line-height:150px;" >O No</h4>';
            box[random].style.background = 'green';
            box[random].innerHTML = '<h4 style="color:white; text-align:center; line-height:150px;">I\'m Here my friend</h4>';
        }
    }
})