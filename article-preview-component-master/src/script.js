const shareButton = document.getElementById('share-button');
const links = document.getElementById('share-icons-wrapper');
const showLinnks = () => {
    shareButton.addEventListener('click', () => {
        if (links.style.display === 'none') {
            links.style.display = 'block';
        } else {
            links.style.display = 'none';
        }
    })
}



showLinnks();
