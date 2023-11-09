
const arrowBtn = document.getElementById('arrow');
const dropdownMenu = document.querySelector('.dropdown-menu');

// dropdown menu
arrowBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show-dropdown');
});

async function mainEvent() {
    const searchButton = document.getElementById('search-icon');

    searchButton.addEventListener('click', async (event) => {
        const error = document.querySelector('.error');
        const word = document.getElementById('search').value;
        const vocab = document.getElementById('vocab');
        const phonetic = document.querySelector('.phonetic');
        const definition = document.getElementById('meaning');
        const type = document.querySelector('.vocab-type');
        const synonym = document.getElementById('synonym');
        const div = document.querySelector('.newDiv');
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            
            // Iterate data[0].meanings array untill i < data[0].meanings.leanth)
            // Copy the "newDiv" element, where it shows different types of the word (noun, verb, interjection,etc) with the different meanings
                // need to cody the whote newDiv element
                // need to grab the right DOM element to update texts
            for (let i = 0; i < data[0].meanings.leanth; i++) {
                
            }
            
           
        } else {
            console.log("no data");
            error.textContent = 'word not found';
        }
    });

    
    
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());