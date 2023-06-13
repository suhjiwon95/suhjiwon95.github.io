    // submit the rating
    // if rating is not selected, don't submit.
    // else, submit the rating and display the thank you state.
        // the rating should appear on the rating state.

const form = document.getElementById('form');

const submit = document.getElementById('submit');


  
const clicked = (e) => {
    e.preventDefault();
    const ratings = document.getElementById('rating-1').value;
    localStorage.setItem("storedValue", ratings);

    const storedValue = localStorage.getItem(storedValue);
    console.log(storedValue);

}

form.addEventListener("submit", clicked);