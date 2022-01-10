const form = document.querySelector('#form')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const amount = document.querySelector('#amount');
    const selectBox = document.querySelector('#selectBox');
    const outPut = document.querySelector('#outPut');


    if(selectBox.value === selectBox.value){
        outPut.innerHTML = amount.value * selectBox.value;
    }


})