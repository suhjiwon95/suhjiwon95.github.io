const lis = document.querySelectorAll(".what-i-did-list div");

console.log(lis.length);

// Smooth scrolling for browsers that don't support CSS smooth scrolling
if (window.getComputedStyle(document.documentElement).scrollBehavior !== 'smooth') {
    document.querySelectorAll('a[href^="#"]').forEach(internalLink => {
        const targetElement = document.querySelector(internalLink.getAttribute('href'));
        if (targetElement) {
            internalLink.addEventListener('click', (e) => {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                });
                e.preventDefault();
            });
        }
    });
}