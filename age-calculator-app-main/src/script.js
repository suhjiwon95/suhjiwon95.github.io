const dayInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');
const button = document.getElementById('button');

const yearCalculated = document.getElementById('year-calculated');
const monthsCalculated = document.getElementById('months-calculated');
const daysCalculated = document.getElementById('days-calculated');


const mainEvent = (e) => {
    e.preventDefault();
    validateInput();
    getBday();

}

function getBday() {
    const bDayInput = `${yearInput.value}-${monthInput.value}-${dayInput.value}`;
    const birthDate = moment(bDayInput);
    const today = moment();

    const years = today.diff(birthDate, 'years');
    const months = today.diff(birthDate, 'months') % 12;
    const days = today.diff(birthDate, 'days') % 30;
  
    yearCalculated.textContent = years;
    monthsCalculated.textContent = months;
    daysCalculated.textContent = days;

    // return years + " years " + months + " months " + days + " days";

}

function validateInput(e) {
    const today = new Date();
    const errorDay = document.getElementById('error-day');
    const errorMonth = document.getElementById('error-month');

    if (dayInput.value < 1 || dayInput.value > 31) {
        errorDay.textContent = "must be a valid day";
        errorDay.style.display = "block";
    } else {
        errorDay.style.display = "none";
    }

    if (monthInput.value < 1 && monthInput.value > 12) {
        errorMonth.textContent = "must be a valid month";
        error.style.display = "block";
    
    } else {
        errorMonth.style.display = "none";
    }
    
    // if (yearInput.value > today.getMonth()) {
    //     error.innerHTML = "must be a valid year";
    //     errorMonth.style.display = "block";
    // }
    
//    inputFields.forEach((input) => {
//     if (input.value.length == 0) {
//         console.log(`input field ${input.value} is empty`);
//         error.style.display = "block";
//         error.textContent = "this must be provided";
//     } else {
//         error.style.className = "none";
//     }
//    });



}


button.addEventListener('click', mainEvent);