    // submit the rating
    // if rating is not selected, don't submit.
    // else, submit the rating and display the thank you state.
        // the rating should appear on the rating state.

const rating = document.getElementById('rate');
const rateBtn = document.querySelectorAll('.rating_btn');
const submit = document.getElementById('submit');
const mainCard = document.querySelector('.mainCard');
const thanksCard = document.querySelector('.box-thankyou');


submit.addEventListener("click", () => {
    thanksCard.classList.remove('hidden');
    mainCard.style.display = 'none';
});

rateBtn.forEach(rate => {
    rate.addEventListener('click', (event) => {
        rating.innerHTML = rate.innerHTML;
    });
});



