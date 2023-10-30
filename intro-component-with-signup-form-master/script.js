const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
let inputs = document.getElementById('form').elements;
let errors = document.querySelectorAll('.error');
const confirmation = document.querySelector('.hidden');
const container = document.querySelector('.container');
const thisEmailAddress = document.querySelector('.this-email');

const mainEvent = (event) => {
    event.preventDefault();

    let formValidation = validateForm();
    if (formValidation) {
        console.log(email.value);
        container.style.display = 'none';
        confirmation.className = 'active';
        thisEmailAddress.textContent = `${email.value}`;
    }
}

const validateForm = () => {
    let validationResult = true;
    
    for (let i = 0; i < inputs.length - 1; i++) {
        if (inputs[i] === fname && inputs[i].value === '') {
            inputs[i].style.border = "2px solid hsl(0, 100%, 74%)";
            errors[i].innerHTML = "First name cannot be empty";
            validationResult = false;
        } else if (inputs[i] === lname && inputs[i].value === '') {
            inputs[i].style.border = "2px solid hsl(0, 100%, 74%)";
            errors[i].innerHTML = "Last name cannot be empty";
            validationResult = false;
        } else if (inputs[i] === email) {
            validationResult = validateEmail();
        } else if (inputs[i] === password && inputs[i].value === '') {
            inputs[i].style.border = "2px solid hsl(0, 100%, 74%)";
            errors[i].innerHTML = "Password cannot be empty";
            validationResult = false
        } else {
            inputs[i].style.border = "";
            errors[i].innerHTML = '';
            validationResult = true
        }
    }

    return validationResult;
}

const validateEmail = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const emailInput = email.value;
    const test = emailRegex.test(emailInput);
    const emailError = document.querySelector('.emailError');
    let isEmailValid = false;

    if (emailInput === '') {
        email.style.border = "2px solid hsl(0, 100%, 74%)";
        emailError.innerHTML = "Email cannot be empty";
        console.log('empty email');
    } else if (!test) {
        email.style.border = "2px solid hsl(0, 100%, 74%)";
        emailError.innerHTML = "Please write a valid email address";
        console.log('wrong email');
    } else {
        email.style.border = "";
        emailError.innerHTML = "";
        console.log('right email');
        isEmailValid = true;
    }

    return isEmailValid;
}

form.addEventListener('submit', mainEvent);
