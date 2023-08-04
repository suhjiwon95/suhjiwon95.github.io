const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');

});

document.querySelectorAll(".dropdown-content li").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
}))


// JavaScript to show/hide dropdown content when clicking on ".menu-header"
    const headers = document.querySelectorAll('.menu-header');

    headers.forEach(header => {
      header.addEventListener('click', () => {
        
        // get the next sibling element of menu-header, which is dropdown-content div
        const dropdownContent = header.nextElementSibling;

        // Add show-dropdown class when the header is toggled
        dropdownContent.classList.toggle('show-dropdown');
       
      });
    });


