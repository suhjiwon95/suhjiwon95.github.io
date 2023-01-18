// email validation and error message with constraint validation
// const email = document.getElementById("email");

// email.addEventListener("input", (event) => {
//     if (email.validity.typeMismatch) {
//       email.setCustomValidity("Please provide a valid email");
//     } else {
//       email.setCustomValidity("");
//     }
//   });

const emailField = document.getElementById("mail");
const error = document.getElementById("error");

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validateEmail() {

    if(!emailField.value.match(emailRegExp) || emailField.value.length === 0) {
        error.innerHTML = "Please provide a valid email";
        emailField.style.borderColor = "red";
        emailField.style.borderWidth = "2px";
        return false;
    } else {
        error.innerHTML = "";
        emailField.style.borderColor = "hsl(0, 36%, 70%)";
        emailField.style.borderWidth = ".8px";
        return true;
    }
    

   

}
