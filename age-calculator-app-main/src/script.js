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


    // checks the day input
    if (dayInput.value < 1 || dayInput.value > 31) {
        errorDay.textContent = "must be a valid day";
        errorDay.style.display = "block";
         
    } else if (dayInput.value === '') {
        errorDay.textContent = "This field is required";
        errorMonth.style.display = "block";
    } else {
        errorDay.style.display = "none";
    }

    // checks the month input
    if (monthInput.value < 1 || monthInput.value > 12) {
        errorMonth.textContent = "must be a valid month";
        errorMonth.style.display = "block";
        
    } else if (monthInput.value === '') {
        errorDay.textContent = "This field is required";
        errorMonth.style.display = "block";
    } else {
        errorMonth.style.display = "none";
    }

    // checks the year input
    if (yearInput.value > today.getFullYear()) {
        erroryear.textContent = "must be in the past";
        erroryear.style.display = "block";
        
    } else if (yearInput.value === '') {
        erroryear.textContent = "This field is required";
        erroryear.style.display = "block";
    } else {
        erroryear.style.display = "none";
    }
    
    if (errorDay.style.display === "block" ||
        errorMonth.style.display === "block" ||
        erroryear.style.display === "block" ) {
        
            return false;
    } else {
        return true;
    }



}


button.addEventListener('click', mainEvent);