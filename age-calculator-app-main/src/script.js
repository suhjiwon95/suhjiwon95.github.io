const dayInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input').value;
const yearInput = document.getElementById('year-input').value;
const button = document.getElementById('button');

const getBday = () => {

    const day = new Date(dayInput.vaalue);
    console.log(day);

    
}

button.addEventListener('click', getBday);


