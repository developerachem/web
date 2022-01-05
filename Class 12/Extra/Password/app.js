const loginForm = document.querySelector('#loginForm');
const loader = document.querySelector('#loader');

const userName = document.querySelector('#userName');
const userNameMassage = document.querySelector('#userNameMassage');

const firstPassword = document.querySelector('#firstPassword');
const firstPasswordMassage = document.querySelector('#firstPasswordMassage');
const firstPasswordeye = document.querySelector('#firstPasswordeye');

const secendPassword = document.querySelector('#secendPassword');
const secendPasswordMassage = document.querySelector('#secendPasswordMassage');
const secendPasswordEye = document.querySelector('#secendPasswordEye');

console.log(firstPassword.type);
/**
 * This Is Click Event Of firstPasswordeye
 */
firstPasswordeye.addEventListener('click', () => {

    if (firstPassword.type == 'password') {
        firstPassword.setAttribute('type', 'text');
        firstPasswordeye.innerHTML = `<i class="far fa-eye-slash"></i>`;
    }else if(firstPassword.type === 'text'){
        firstPassword.setAttribute('type', 'password');
        firstPasswordeye.innerHTML = `<i class="far fa-eye"></i>`;
    }

})

/**
 * This Is Click Event Of secendPasswordEye
 */
 secendPasswordEye.addEventListener('click' , () => {
    if (secendPassword.type == 'password') {
        secendPassword.setAttribute('type', 'text');
        secendPasswordEye.innerHTML = `<i class="far fa-eye-slash"></i>`;
    }else if(secendPassword.type === 'text'){
        secendPassword.setAttribute('type', 'password');
        secendPasswordEye.innerHTML = `<i class="far fa-eye"></i>`;
    }
 } )


/**
 * This Is Blur Event Of userName
 */
userName.addEventListener('blur', () => {
    if (userName.value === "") {
        userName.style.border = '1px solid red';
        userNameMassage.innerHTML = '*User Name Field Required';
    } else {
        userName.style.border = '';
        userNameMassage.innerHTML = '';
    }
})

/**
 * This Is Key Up Event Of userName
 */

userName.addEventListener('keyup', () => {
    loader.classList.remove('visibole');
    if (userName.value === "") {
        userName.style.border = '1px solid red';
        userNameMassage.innerHTML = '*User Name Field Required';
    } else if (/^[a-z.]{5,16}$/.test(userName.value) === false) {
        userName.style.border = '1px solid red';
        userNameMassage.innerHTML = '*Type Valid Username';
    } else {
        userName.style.border = '';
        userNameMassage.innerHTML = '';
    }
})


/**
 * this Is Blur Event Of firstPassword Field
 */

firstPassword.addEventListener('blur', () => {
    if (firstPassword.value === "") {
        firstPasswordMassage.innerHTML = '*Password Fild Required !';
        firstPassword.style.border = '1px solid red'
    }
})

/**
 * This Is Key Up Event Of firstPassword
 */
firstPassword.addEventListener('keyup', () => {
    loader.classList.remove('visibole');
    if (firstPassword.value === "") {
        firstPasswordMassage.innerHTML = '*Password Fild Required !';
        firstPassword.style.border = '1px solid red';
    } else if (/^[A-Za-z0-9@#&]{8,16}$/.test(firstPassword.value) === false) {
        firstPasswordMassage.innerHTML = '*Type valid Password !';
        firstPassword.style.border = '1px solid red';
    } else {
        firstPasswordMassage.innerHTML = '';
        firstPassword.style.border = '';
    }
})


/**
 * this Is Blur Event Of secendPassword Field
 */

secendPassword.addEventListener('blur', () => {
    if (secendPassword.value === "") {
        secendPasswordMassage.innerHTML = '*Password Fild Required !';
        secendPassword.style.border = '1px solid red'
    }
})

/**
 * This Is Key Up Event Of secendPassword
 */
secendPassword.addEventListener('keyup', () => {
    loader.classList.remove('visibole');
    if (secendPassword.value === "") {
        secendPasswordMassage.innerHTML = '*Password Fild Required !';
        secendPassword.style.border = '1px solid red';
    } else if (firstPassword.value === secendPassword.value) {
        secendPasswordMassage.innerHTML = 'Password Is Good ❤';
        secendPasswordMassage.style.color = 'green'
        secendPassword.style.border = '';
    } else {
        secendPasswordMassage.innerHTML = '*Password Not Match 😡';
        secendPassword.style.border = '1px solid red'
        secendPasswordMassage.style.color = 'red'
    }
})


/**
 * This Is Submit Event Of Login Form
 */
 const nurAMinVai = document.querySelector('#nurAMinVai');
 nurAMinVai.addEventListener('click', (e) => {
   //e.preventDefault();
   if (userName.value === "" && firstPassword.value === "" && secendPassword.value === "") {
        userName.style.border = '1px solid red';
        userNameMassage.innerHTML = '*User Name Field Required';

        firstPasswordMassage.innerHTML = '*Password Fild Required !';
        firstPassword.style.border = '1px solid red';

        secendPasswordMassage.innerHTML = '*Password Fild Required !';
        secendPassword.style.border = '1px solid red'

    } else if (userName.value === "") {
        userName.style.border = '1px solid red';
        userNameMassage.innerHTML = '*User Name Field Required';
    } else if (firstPassword.value === "") {
        firstPasswordMassage.innerHTML = '*Password Fild Required !';
        firstPassword.style.border = '1px solid red';
    } else if (secendPassword.value === "") {
        secendPasswordMassage.innerHTML = '*Password Fild Required !';
        secendPassword.style.border = '1px solid red'
    } else if (/^[A-Za-z0-9@#&]{8,16}$/.test(firstPassword.value) === false) {
        firstPasswordMassage.innerHTML = '*Type valid Password !';
        firstPassword.style.border = '1px solid red';
    } else if (firstPassword.value === secendPassword.value === false) {
        secendPasswordMassage.innerHTML = '*Password Not Match 😡';
        secendPassword.style.border = '1px solid red'
        secendPasswordMassage.style.color = 'red'
    } else {
        loader.classList.add('visibole');
        userName.value = "";
        firstPassword.value = "";
        secendPassword.value = "";
        secendPasswordMassage.innerHTML = '';
        
        nurAMinVai.setAttribute('href','https://www.facebook.com')
    }
})

/**
 * This Is Click Event Of nurAMinVai
 */

// nurAMinVai.addEventListener('click', () => {
//     if (userName.value === "" || /^[A-Za-z0-9@#&]{8,16}$/.test(firstPassword.value) === false || firstPassword.value === secendPassword.value === false){
//         loader.innerHTML = ` <a href="#"> ${nurAMinVai.value}</a>`
//     }else {
//         nurAMinVai.setAttribute('href','https://www.facebook.com')
//     }
// })