const form = document.querySelector('#form');


const amountSyntex = document.querySelector('#amountSyntex');
const amountFeild = document.querySelector('#amountFeild');
const amoundFeildMassage = document.querySelector('#amoundFeildMassage');


const firstCheckbox = document.querySelector('#firstCheckbox');
const firstCheckboxMassage = document.querySelector('#firstCheckboxMassage');


const secendCheckbox = document.querySelector('#secendCheckbox');
const secendCheckboxMassage = document.querySelector('#secendCheckboxMassage');

const rooter = document.querySelector('#rooter');

const output = document.querySelector('#output');
const button = document.querySelector('#button');


/**
 * This Is Click Event Of rooter
 */
 rooter.addEventListener('click', () => {
    if( firstCheckbox.value === secendCheckbox.value){
        firstCheckbox.value = secendCheckbox.children[5].value;
        secendCheckbox.value = firstCheckbox.children[5].value;
    }

    else{
        alert()
    }
 })



/**
 * This Is Blur Event Of amountFeild
 */
amountFeild.addEventListener('blur', () => {
    if (amountFeild.value === "") {
        amoundFeildMassage.innerHTML = '*Amount Field Required';
        amountFeild.style.border = '1px solid red'
        amountSyntex.innerHTML = '';
    } else {
        amountFeild.style.border = '1px solid green'
    }
})

/**
 * This Is KeyUp Event Of amountFeild 
 */
amountFeild.addEventListener('keyup', () => {
    output.innerHTML = 'Result...';
    if (amountFeild.value === "") {
        amoundFeildMassage.innerHTML = '*Amount Field Required';
        amountFeild.style.border = '1px solid red'
    } else if (/^[\d]+$/.test(amountFeild.value) === false) {
        amoundFeildMassage.innerHTML = '*Amount Only Number';
        amountFeild.style.border = '1px solid red'
        amountSyntex.innerHTML = '';
        
    } else {
        amoundFeildMassage.innerHTML = '';
        button.classList.remove('hide')
        amountFeild.style.border = '1px solid green'
    }
})

/**
 * This Is Click Event Of firstCheckbox
 */
firstCheckbox.addEventListener('click', () => {
    if (firstCheckbox.value === firstCheckbox.children[0].value) {
        firstCheckbox.style.border = '1px solid red';
        firstCheckboxMassage.innerHTML = '*Required';
        amountSyntex.innerHTML = '';
    } else if (firstCheckbox.value === firstCheckbox.children[1].value) {
        amountSyntex.innerHTML = '৳';
        firstCheckbox.style.border = '1px solid green';
        firstCheckboxMassage.innerHTML = '';
    } else if (firstCheckbox.value === firstCheckbox.children[2].value) {
        amountSyntex.innerHTML = '$';
        firstCheckbox.style.border = '1px solid green';
        firstCheckboxMassage.innerHTML = '';
    } else if (firstCheckbox.value === firstCheckbox.children[3].value) {
        amountSyntex.innerHTML = '€';
        firstCheckbox.style.border = '1px solid green';
        firstCheckboxMassage.innerHTML = '';
    } else if (firstCheckbox.value === firstCheckbox.children[4].value) {
        amountSyntex.innerHTML = '₹';
        firstCheckbox.style.border = '1px solid green';
        firstCheckboxMassage.innerHTML = '';
    } else if (firstCheckbox.value === firstCheckbox.children[5].value) {
        amountSyntex.innerHTML = '£';
        firstCheckbox.style.border = '1px solid green';
        firstCheckboxMassage.innerHTML = '';
    }else {
        amountSyntex.innerHTML = '';

    }
})



/**
 * This Is Click Event Of secendCheckbox
 */
secendCheckbox.addEventListener('click', () => {
    if (secendCheckbox.value === secendCheckbox.children[0].value) {
        secendCheckboxMassage.innerHTML = '*Required';
        secendCheckbox.style.border = '1px solid red';
    } else {
        secendCheckboxMassage.innerHTML = '';
        secendCheckbox.style.border = '1px solid green';
    }
})


/**
 * This Is Submit Event Of Form
 */
form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (amountFeild.value === "" && firstCheckbox.value === firstCheckbox.children[0].value && secendCheckbox.value === secendCheckbox.children[0].value) {
        amoundFeildMassage.innerHTML = '*Amount Field Required';
        amountFeild.style.border = '1px solid red';

        firstCheckbox.style.border = '1px solid red';
        firstCheckboxMassage.innerHTML = '*Required';

        secendCheckbox.style.border = '1px solid red';
        secendCheckboxMassage.innerHTML = '*Required';

    } else if (amountFeild.value === "") {
        amoundFeildMassage.innerHTML = '*Amount Field Required';
        amountFeild.style.border = '1px solid red';
    } else if (firstCheckbox.value === firstCheckbox.children[0].value) {
        firstCheckbox.style.border = '1px solid red';
        firstCheckboxMassage.innerHTML = '*Required';
    } else if (secendCheckbox.value === secendCheckbox.children[0].value) {
        secendCheckbox.style.border = '1px solid red';
        secendCheckboxMassage.innerHTML = '*Required';
    } else if( firstCheckbox.children[1].value === '1' ){
        output.innerHTML = 'Sorry Select Defrent Country And Try Again !';
        button.classList.add('hide')
        amountSyntex.innerHTML = '';
        amountFeild.value = '';
    }
    
    
    
    else {
       alert()
    }

    // console.log(firstCheckbox.value );
    // console.log(secendCheckbox.value );


})



