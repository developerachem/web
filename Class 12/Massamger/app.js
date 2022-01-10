const promptYourName = prompt('Type Your Name');
const promptMyImg = prompt('Your Image URL');

const promptClintName = prompt('Your Clint Name');
const promptClintImg = prompt('Your Clint Image URL');

const clintImg = document.querySelector('#clintImage')
const myImage = document.querySelector('#myImage')

const myName = document.querySelector('#myName');
const clintName = document.querySelector('#clintName');

const myMassageReplay = document.getElementById('my-massage-input');
const myMassageBtn = document.getElementById('my-massage-btn');
const myMassageBody = document.getElementById('my-massage');
// const myMassageMyBodyReplay = document.getElementById('myMassageMyBodyReplay');

const clintMassageReplay = document.getElementById('clint-massage-input');
const clintMassageBtn = document.getElementById('clint-massage-btn');
const clintMassageBody = document.getElementById('clint-massage');
//const clintBodyReplay = document.getElementById('clintBodyReplay');

const clintMassageDiv = document.querySelector('.clint-massage');

if(promptYourName === ""){
    myName.innerHTML = 'You';
}else{
    myName.innerHTML = promptYourName ;
}
if(promptClintName === ""){
    clintName.innerHTML = 'Clint';
}else {
    clintName.innerHTML = promptClintName ;
}

if( promptMyImg === "" ){
    myImage.innerHTML = `<img src="https://i.ibb.co/Mcpx4y1/0c6c073671d34e79d9e37580578ee239.jpg" alt="">`
}else {
    myImage.innerHTML = `<img src="${promptMyImg}" alt="">`
}


if(promptClintImg === ""){
    clintImg.innerHTML = `<img src="https://i.ibb.co/zNqKYjC/fc4cd1e04c2cd58f8de7602ef24ae475-karibu-korean-art.jpg" alt="">`
}else{
    clintImg.innerHTML = `<img src="${promptClintImg}" alt="">`

}

myMassageBtn.addEventListener('submit' , (e) => {
    e.preventDefault()
    
    if(myMassageReplay.value === ""){
        
        myMassageReplay.value = "";

    }else if( promptMyImg === "" && promptClintImg === "" ){

        myImage.innerHTML = `<img src="https://i.ibb.co/Mcpx4y1/0c6c073671d34e79d9e37580578ee239.jpg" alt="">`
        clintMassageBody.innerHTML += (`<li id="imageSize"> <img id="image" src="https://i.ibb.co/Mcpx4y1/0c6c073671d34e79d9e37580578ee239.jpg" alt=""> <p>${myMassageReplay.value}</p></li>`);
        myMassageBody.innerHTML += (`<li id="massage1"><p>${myMassageReplay.value}</p> <img id="image" src="https://i.ibb.co/Mcpx4y1/0c6c073671d34e79d9e37580578ee239.jpg" alt=""> </li>`);
        myMassageReplay.value = "";


        clintImg.innerHTML = `<img src="https://i.ibb.co/zNqKYjC/fc4cd1e04c2cd58f8de7602ef24ae475-karibu-korean-art.jpg" alt="">`
        clintMassageBody.innerHTML += (`<li id="imageSize"> <img id="image" src="https://i.ibb.co/zNqKYjC/fc4cd1e04c2cd58f8de7602ef24ae475-karibu-korean-art.jpg"  alt=""> <p>${myMassageReplay.value}</p></li>`);
        myMassageBody.innerHTML += (`<li id="massage1"><p>${myMassageReplay.value}</p> <img id="image" src="https://i.ibb.co/zNqKYjC/fc4cd1e04c2cd58f8de7602ef24ae475-karibu-korean-art.jpg"  alt=""> </li>`);
        myMassageReplay.value = "";

    }else{
        clintMassageBody.innerHTML += (`<li id="imageSize"> <img id="image" src="${promptMyImg}" alt=""> <p>${myMassageReplay.value}</p></li>`);
        myMassageBody.innerHTML += (`<li id="massage1"><p>${myMassageReplay.value}</p> <img id="image" src="${promptMyImg}" alt=""> </li>`);
        myMassageReplay.value = "";
    }
})

clintMassageBtn.addEventListener('submit', (e) => {
    e.preventDefault()

    
    if(clintMassageReplay.value === ""){
        clintMassageReplay.value = "";
    }else {
        myMassageBody.innerHTML += (`<li id="imageSize"> <img id="image" src="${promptClintImg}" alt=""> <p>${clintMassageReplay.value}</p></li>`);
        clintMassageBody.innerHTML += (`<li id="massage1"><p>${clintMassageReplay.value}</p> <img id="image" src="${promptClintImg}" alt=""> </li>`)
        clintMassageReplay.value = "";
    }  

} )