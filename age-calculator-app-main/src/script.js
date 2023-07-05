const dayInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');
const button = document.getElementById('button');

const yearCalculated = document.getElementById('year-calculated');
const monthsCalculated = document.getElementById('months-calculated');
const daysCalculated = document.getElementById('days-calculated');


const mainEvent = (e) => {
    e.preventDefault();
    // validateInput();
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
    const inputFields = document.querySelectorAll(".input-field");
    const error = document.querySelectorAll('.date-form div.error');
    const today = new Date();

    // if (dayInput.value > 31) {
    //     const errorDay = document.querySelector('.date-form #error-day');
    //     errorDay.innerHTML = "must be a valid day";
    //     errorDay.style.display = "block";
    // }

    // if (monthInput.value > 12) {
    //     const errorMonth = document.querySelector('.date-form #error-month');
    //     errorMonth.innerHTML = "must be a valid month";
    //     error.style.display = "block";
    
    // }

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