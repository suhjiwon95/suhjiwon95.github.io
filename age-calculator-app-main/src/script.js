const dayInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');
const button = document.getElementById('button');
const error = document.getElementsByClassName('error');
const yearCalculated = document.getElementById('year-calculated');
const monthsCalculated = document.getElementById('months-calculated');
const daysCalculated = document.getElementById('days-calculated');

const getBday = () => {
    const bDayInput = `${yearInput.value}-${monthInput.value}-${dayInput.value}`;
    const birthDate = moment(bDayInput);
    const today = moment();
    
    const years = today.diff(birthDate, 'years');
    const months = today.diff(birthDate, 'months') % 12;
    const days = today.diff(birthDate, 'days') % 30;
  

    yearCalculated.textContent = years;
    monthsCalculated.textContent = months;
    daysCalculated.textContent = days;

    console.log( years + " years " + months + " months " + days + " days");


}

button.addEventListener('click', getBday);


