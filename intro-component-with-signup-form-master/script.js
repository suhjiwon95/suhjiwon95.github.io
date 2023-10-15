const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
let inputs = document.getElementById('form').elements;
let errors = document.querySelectorAll('.error');

const validateForm = (event) => {

   
    for (let i = 0; i < inputs.length - 1; i++) {
        if (inputs[i] === fname && inputs[i].value === '') {
            inputs[i].style.border = "2px solid hsl(0, 100%, 74%)";
            errors[i].innerHTML = "First name cannot be empty";
            event.preventDefault();
        } else if (inputs[i] === lname && inputs[i].value === '') {
            inputs[i].style.border = "2px solid hsl(0, 100%, 74%)";
            errors[i].innerHTML = "Last name cannot be empty";
            event.preventDefault();
        } else if (inputs[i] === email) {
            validateEmail(event);
        } else if (inputs[i] === password && inputs[i].value === '') {
            inputs[i].style.border = "2px solid hsl(0, 100%, 74%)";
            errors[i].innerHTML = "Password cannot be empty";
            event.preventDefault();
        } else {
            inputs[i].style.border = "";
            errors[i].innerHTML = '';
        }
    }

}

const validateEmail = (event) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const emailInput = email.value;
    const test = emailRegex.test(emailInput);
    const emailError = document.querySelector('.emailError');
    let isEmailValid;

    if (emailInput === '') {
        email.style.border = "2px solid hsl(0, 100%, 74%)";
        emailError.innerHTML = "Email cannot be empty";
        console.log('empty email');
        event.preventDefault();
        isEmailValid = false;
        
        return isEmailValid;

    } else if (!test) {
        email.style.border = "2px solid hsl(0, 100%, 74%)";
        emailError.innerHTML = "Please write a valid email address";
        console.log('wrong email');
        event.preventDefault();
        isEmailValid = false;
        
        return isEmailValid;
        
    } else {
        email.style.border = "";
        emailError.innerHTML = "";
        console.log('right email');
        isEmailValid = true;
        
        return isEmailValid;
    
    }
}

form.addEventListener('submit', validateForm);

 // for (let i = 0; i < inputs.length - 1; i++) {
    //     if (inputs[i].value === '') {
    //         inputs[i].style.border = "2px solid hsl(0, 100%, 74%)";
    //         errors[i].innerHTML = "This field cannot be empty";
    //         event.preventDefault();
    //     } else {
    //         errors[i].innerHTML = "";
    //     }
    // }
