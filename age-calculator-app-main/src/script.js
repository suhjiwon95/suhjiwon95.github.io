const dayInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');
const button = document.getElementById('button');

const yearCalculated = document.getElementById('year-calculated');
const monthsCalculated = document.getElementById('months-calculated');
const daysCalculated = document.getElementById('days-calculated');


const mainEvent = (e) => {
    getBday();
}

function getBday(e) {
    
    const validation = validateInput();

    if(validation === true) {
        const bDayInput = `${yearInput.value}-${monthInput.value}-${dayInput.value}`;
        const birthDate = moment(bDayInput);
        const today = moment();
    
        const years = today.diff(birthDate, 'years');
        const months = today.diff(birthDate, 'months') % 12;
        const days = today.diff(birthDate, 'days') % 30;
    
        yearCalculated.textContent = years;
        monthsCalculated.textContent = months;
        daysCalculated.textContent = days;
    } else {
        e.preventDefault();
        
    }
   

    
}

function validateInput() {
    const today = new Date();
    const errorDay = document.getElementById('error-day');
    const errorMonth = document.getElementById('error-month');
    const erroryear = document.getElementById('error-year');
    const isnum = /^\d+$/;

    // checks the day input
    if (dayInput.value < 1 || dayInput.value > 31 || isnum.test(dayInput.value) === false) {
        errorDay.textContent = "must be a valid day";
        errorDay.style.opacity = 1;
    
    } else if (dayInput.value === '') {
        errorDay.textContent = "This field is required";
        errorDay.style.opacity = 1;
        
    } else {
        console.log(`${dayInput.value}`);
    }

    // checks the month input
    if (monthInput.value < 1 || monthInput.value > 12 || isnum.test(monthInput.value) === false) {
        errorMonth.textContent = "must be a valid month";
        errorMonth.style.opacity = 1;
        
    } else if (monthInput.value === '') {
        errorDay.textContent = "This field is required";
        errorMonth.style.opacity = 1;
    } 

    // checks the year input
    if (yearInput.value > today.getFullYear()) {
        erroryear.textContent = "must be in the past";
        erroryear.style.opacity = 1;
        
    } else if (yearInput.value === '') {
        erroryear.textContent = "This field is required";
        erroryear.style.opacity = 1;

    } else if (isnum.test(yearInput.value) === false) {
        erroryear.textContent = "must be a valid year";
        erroryear.style.opacity = 1;
    }
    
    if (errorDay.style.opacity === 1 ||
        errorMonth.style.opacity === 1 ||
        erroryear.style.opacity === 1 ) {
            return false;
    } else {
        return true;
    }



}


button.addEventListener('click', mainEvent);