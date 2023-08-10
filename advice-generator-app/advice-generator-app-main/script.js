const generateAdviceButton = document.getElementById('dice');


async function mainEvent() {
    const loadAnimation = document.querySelector('#data_load_animation');
    loadAnimation.style.display = 'none';

    generateAdviceButton.addEventListener('click', async () => {
        const adviceDiv = document.getElementById('advice');
        const adviceId = document.getElementById('advice-id');

        console.log('loading data');
        loadAnimation.style.display = 'inline-block';
    
        const response = await fetch('https://api.adviceslip.com/advice');
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            loadAnimation.style.display = 'none';
            // Getting advice
            const advice = data.slip.advice;
            adviceDiv.textContent = `"${advice}"`;
            
            // Getting advice id
            const advice_id = data.slip.id;
            adviceId.textContent = advice_id;
    
        } else {
            console.log("no data");
            adviceDiv.textContent = 'Please try again';
        }
    });

}

document.addEventListener('DOMContentLoaded', async () => mainEvent());

