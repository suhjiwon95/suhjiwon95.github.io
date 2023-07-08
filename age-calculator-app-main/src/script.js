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
        console.log(years, months, days);
        
    } else if (years.value === NaN) {
        yearCalculated.textContent = '--';
        monthsCalculated.textContent = '--';
        daysCalculated.textContent = '--';
    } else {
        yearCalculated.textContent = '--';
        monthsCalculated.textContent = '--';
        daysCalculated.textContent = '--';
    }

    
}

function validateInput() {
    const today = new Date();
    const errorDay = document.getElementById('error-day');
    const errorMonth = document.getElementById('error-month');
    const erroryear = document.getElementById('error-year');
    const dayTitle = document.querySelector('div.day p');
    const monthsTitle = document.querySelector('div.month p');
    const yearsTitle = document.querySelector('div.year p');
    const isnum = /^\d+$/;

    // checks the day input
    if (dayInput.value < 1 || dayInput.value > 31 || isnum.test(dayInput.value) === false) {
        errorDay.className = 'error-active';
        errorDay.textContent = "must be a valid day";
        errorDay.style.opacity = 1;
        dayTitle.style.color = "red";
        
    } else if (dayInput.value === '') {
        errorDay.textContent = "This field is required";
        errorDay.style.opacity = 1;
        errorDay.className = 'error-active';
        dayTitle.style.color = "red";
        
    } else {
        errorDay.style.opacity = 0;
        errorDay.className = 'error';
        dayTitle.style.color = "hsl(0, 1%, 44%)";
    }

    // checks the month input
    if (monthInput.value < 1 || monthInput.value > 12 || isnum.test(monthInput.value) === false) {
        errorMonth.textContent = "must be a valid month";
        errorMonth.style.opacity = 1;
        errorMonth.className === 'error-active';
        monthsTitle.style.color = "red";
        
    } else if (monthInput.value === '') {
        errorDay.textContent = "This field is required";
        errorMonth.style.opacity = 1;
        errorMonth.className === 'error-active';
        monthsTitle.style.color = "red";
    } else {
        errorMonth.style.opacity = 0;
        errorMonth.className = 'error';
        monthsTitle.style.color = "hsl(0, 1%, 44%)";
    }

    // checks the year input
    if (yearInput.value > today.getFullYear()) {
        erroryear.textContent = "must be in the past";
        erroryear.style.opacity = 1;
        erroryear.className === 'error-active';
        yearsTitle.style.color = "red";
        
    } else if (yearInput.value === '') {
        erroryear.textContent = "This field is required";
        erroryear.style.opacity = 1;
        erroryear.className === 'error-active';
        yearsTitle.style.color = "red";

    } else if (yearInput.value === 0 || yearInput.value < 1 || isnum.test(yearInput.value) === false) {
        erroryear.textContent = "must be a valid year";
        erroryear.style.opacity = 1;
        erroryear.className === 'error-active';
        yearsTitle.style.color = "red";
    } else {
        erroryear.style.opacity = 0;
        erroryear.className = 'error';
        yearsTitle.style.color = "hsl(0, 1%, 44%)";
    }
    
    if (errorDay.className === 'error-active' ||
    errorMonth.className === 'error-active' ||
    erroryear.className === 'error-active' ) {
        console.log('nope'); 
        return false;
    } else {
        console.log('yeah');
        return true;
    }




}


button.addEventListener('click', mainEvent);