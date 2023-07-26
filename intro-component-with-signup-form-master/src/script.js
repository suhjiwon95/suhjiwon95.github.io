const form = document.getElementById("form");

const validateForm = (e) => {
    // check first name
    checkFirstName();
    // check last name
    checkLastName();
    // check email
    checkEmail();
    // check password
    checkPassword();
    e.preventDefault();
}

form.addEventListener('submit', validateForm);

const checkFirstName = () => {
    const errorMsg = document.querySelector(".error-msg-fname");
    const errorIcon = document.getElementById("error-icon-fname");
    const inputBorder = document.querySelector("input#fname");
    const fname = document.getElementById('fname');
    if (fname.value === "") {
        errorIcon.style.display = 'block';
        errorMsg.textContent = 'First name cannot be empty';
        errorMsg.style.display = 'block';
        inputBorder.style.borderColor = "red";
    } else {
        errorIcon.style.display = '';
        errorMsg.style.display = '';
        inputBorder.style.borderColor = "";
    }
    
}

const checkLastName = (e) => {
    const lname = document.getElementById('lname');
    const errorMsg = document.querySelector(".error-msg-lname");
    const errorIcon = document.getElementById("error-icon-lname");
    const inputBorder = document.querySelector("input#lname");
    if (lname.value === "") {
        errorIcon.style.display = 'block';
        errorMsg.textContent = 'Last name cannot be empty';
        errorMsg.style.display = 'block';
        inputBorder.style.borderColor = "red";
    } else {
        errorIcon.style.display = '';
        errorMsg.style.display = 'hidden';
        inputBorder.style.borderColor = "";
    }
}

const checkEmail = (e) => {
    const email = document.getElementById('email');
    const errorMsg = document.querySelector(".error-msg-email");
    const errorIcon = document.getElementById("error-icon-email");
    const inputBorder = document.querySelector("input#email");
    if (email.value === "") {
        errorIcon.style.display = 'block';
        errorMsg.textContent = 'Email cannot be empty';
        errorMsg.style.display = 'block';
        inputBorder.style.borderColor = "red";
    } else {
        errorIcon.style.display = '';
        errorMsg.style.display = 'hidden';
        inputBorder.style.borderColor = "";
    }
}

const checkPassword = (e) => {
    const password = document.getElementById('password');
    const errorMsg = document.querySelector(".error-msg-password");
    const errorIcon = document.getElementById("error-icon-password");
    const inputBorder = document.querySelector("input#password");
    if (password.value === "") {
        errorIcon.style.display = 'block';
        errorMsg.textContent = 'Password cannot be empty';
        errorMsg.style.display = 'block';
        inputBorder.style.borderColor = "red";
    } else {
        errorIcon.style.display = '';
        errorMsg.style.display = 'hidden';
        inputBorder.style.borderColor = "";
    }
}