const generateAdviceButton = document.getElementById('dice');

generateAdviceButton.addEventListener('click', async () => {
    const adviceDiv = document.getElementById('advice');
    const adviceId = document.getElementById('advice-id');

    const response = await fetch('https://api.adviceslip.com/advice');
    if (response.ok) {
        const data = await response.json();
        console.log(data);

        // Getting advice
        const advice = data.slip.advice;
        adviceDiv.textContent = `"${advice}"`;
        
        // Getting advice id
        const advice_id = data.slip.id;
        adviceId.textContent = advice_id;
    } else {
        console.log("no data");
    }
});