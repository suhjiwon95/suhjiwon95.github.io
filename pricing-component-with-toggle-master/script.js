// if input is checked (clicked; true), show monthly and hide annually
// else, show annually and hide monthly.


const input = document.querySelector('input[type=checkbox]');

input.addEventListener('click', () => {
    const monthly = document.querySelector('.monthly');
    const annually = document.querySelector('.annually');
    
    monthlyHasHidden = monthly.classList.toggle("hidden");
    annuallyHasHidden = annually.classList.toggle("hidden");

    // note for my understanding. It was somewhat confusing
    if (monthlyHasHidden) {
        console.log("if monthly does not have the class name 'hidden', add it and returns ", monthlyHasHidden);
        
    } else {
        console.log("if monthly has the class name 'hidden', remove it and returns ", monthlyHasHidden);

    }

    

});