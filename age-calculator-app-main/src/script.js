const dayInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');
const button = document.getElementById('button');
const error = document.getElementsByClassName('error');
const yearCalculated = document.getElementById('year-calculated');

const getBday = () => {

    const today = new Date();
    const todayMoment = moment(today);
    const birthday = new Date(yearInput.value, monthInput.value - 1, dayInput.value);
    const bdayMoment = moment(birthday);
    const difference = todayMoment.from(bdayMoment);
  
    console.log();
    yearCalculated.textContent = difference;

    


    
}

button.addEventListener('click', getBday);


