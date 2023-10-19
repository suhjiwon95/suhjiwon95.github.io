document.addEventListener("mousemove", function(e) {
    let sun = document.querySelector('.sun');
    if (sun) {
        let left = e.pageX - 150;
        let top = e.pageY - 150;
        sun.style.left = left + "px";
        sun.style.top = top + "px";
    }
});

