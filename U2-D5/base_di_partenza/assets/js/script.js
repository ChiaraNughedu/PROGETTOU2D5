const header = document.querySelector("header");
const button = document.getElementById("button");
window.addEventListener('scroll', function() {
    if (window.scrollY > 180) {
        header.style.backgroundColor = 'white';
    } else {
        header.style.backgroundColor = '#ffc017';
    }
});
window.addEventListener('scroll', function() {
    if (window.scrollY > 180) {
        button.style.backgroundColor = 'green';
    } else {
        button.style.backgroundColor = 'black';
    }
});