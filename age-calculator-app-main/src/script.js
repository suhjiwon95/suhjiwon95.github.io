
// Set user input
const dayInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');
const button = document.getElementById('button');

// Set calculated date
const yearCalculated = document.getElementById('year-calculated');
const monthsCalculated = document.getElementById('months-calculated');
const daysCalculated = document.getElementById('days-calculated');


const mainEvent = (e) => {
    e.preventDefault();
    getBday();
}

function getBday(e) {
    
    const isValid = validateInput();

    if(!isValid) {
        return; // Exit the function if inputs are not valid
        
    } else {

        // Save user input in "yyyy-mm-dd" format in birthDate object
        const bDayInput = `${yearInput.value}-${monthInput.value}-${dayInput.value}`;
        const birthDate = moment(bDayInput);

        // Get today's date
        const today = moment();
    
        // Calculate dates; today - birthDate
        const years = today.diff(birthDate, 'years');
        const months = today.diff(birthDate, 'months') % 12;
        const days = today.diff(birthDate, 'days') % 30;
        
        // Display retults in screen
        yearCalculated.textContent = years;
        monthsCalculated.textContent = months;
        daysCalculated.textContent = days;

    }
    
}

function validateInput() {
    
    const today = new Date(); // Create date object to get current date

    // Select error messages when user input is not valid
    const errorDay = document.getElementById('error-day');
    const errorMonth = document.getElementById('error-month');
    const erroryear = document.getElementById('error-year');

    // Select title to change color when user input is not valid
    const dayTitle = document.querySelector('div.day p');
    const monthsTitle = document.querySelector('div.month p');
    const yearsTitle = document.querySelector('div.year p');

    // Select border to change color when user input is not valid
    const dayBorder = document.querySelector('div.day input[type="text');
    const monthsBorder = document.querySelector('div.month input[type="text');
    const yearsBorder = document.querySelector('div.year input[type="text');

    const isnum = /^\d+$/; // Check if value contains only digits
    let isValid = true; // if pass the validation, returns true; Otherwise, false

    // checks the day input
    if (dayInput.value < 1 || dayInput.value > 31 || isnum.test(dayInput.value) === false) {
        errorDay.className = 'error-active'; // Change class name
        errorDay.textContent = "must be a valid day"; // Display error message
        errorDay.style.display = "block"; // Show the error message
        dayTitle.style.color = "red"; // Change the title color
        dayBorder.style.borderColor = "red"; // Change the border color
        isValid = false; // fail to pass validation
    } else if (dayInput.value === '') {
        errorDay.textContent = "This field is required";
        errorDay.style.display = "block";
        errorDay.className = 'error-active';
        dayTitle.style.color = "red";
        dayBorder.style.borderColor = "red";
        isValid = false;
    } else {
        errorDay.style.display = ""; // reset display setting
        dayTitle.style.color = ""; // reset title color
        dayBorder.style.borderColor = ""; // reset border color
    }

    // checks the month input
    if (monthInput.value < 1 || monthInput.value > 12 || isnum.test(monthInput.value) === false) {
        errorMonth.textContent = "must be a valid month";
        errorMonth.style.display = "block";
        errorMonth.className === 'error-active';
        monthsTitle.style.color = "red";
        monthsBorder.style.borderColor = "red";
        isValid = false;
    } else if (monthInput.value === '') {
        errorDay.textContent = "This field is required";
        errorMonth.style.display = "block";
        errorMonth.className === 'error-active';
        monthsTitle.style.color = "red";
        monthsBorder.style.borderColor = "red";
        isValid = false;
    } else {
        errorMonth.style.display = "";
        monthsTitle.style.color = "";
        monthsBorder.style.borderColor = "";
    }

    // checks the year input
    if (yearInput.value > today.getFullYear()) {
        erroryear.textContent = "must be in the past";
        erroryear.style.display = "block";
        erroryear.className === 'error-active';
        yearsTitle.style.color = "red";
        yearsBorder.style.borderColor = "red";
        isValid = false;
    } else if (yearInput.value === '') {
        erroryear.textContent = "This field is required";
        erroryear.style.display = "block";
        erroryear.className === 'error-active';
        yearsTitle.style.color = "red";
        yearsBorder.style.borderColor = "red";
        isValid = false;
    } else if (yearInput.value === 0 || yearInput.value < 1 || isnum.test(yearInput.value) === false) {
        erroryear.textContent = "must be a valid year";
        erroryear.style.display = "block";
        erroryear.className === 'error-active';
        yearsTitle.style.color = "red";
        yearsBorder.style.borderColor = "red";
        isValid = false;
    } else {
        erroryear.style.display = "";
        yearsTitle.style.color = "";
        yearsBorder.style.borderColor = "";
    }
    
    return isValid;

}

// Add an event listener to the button
button.addEventListener('click', mainEvent);