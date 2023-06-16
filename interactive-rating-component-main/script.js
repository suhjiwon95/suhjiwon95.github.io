    // submit the rating
    // if rating is not selected, don't submit.
    // else, submit the rating and display the thank you state.
        // the rating should appear on the rating state.

const rating = document.getElementById('rate');
const rateBtn = document.querySelectorAll('.rating_btn');
const submit = document.getElementById('submit');
const mainCard = document.querySelector('.mainCard');
const thanksCard = document.querySelector('.box-thankyou');



const setFormListeners = () => {
    // change the state of form button if rating is clicked
    rateBtn.forEach(input => {
        input.addEventListener('click', (e) => {
            submit.disabled = false;
            rating.textContent = input.innerHTML;
        });
    });

    submit.addEventListener("click", (e) => {
        thanksCard.classList.remove('hidden');
        mainCard.style.display = 'none';
    });
    
}

const main = () => {
    setFormListeners();
}

main();