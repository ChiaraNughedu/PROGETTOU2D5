const header = document.getElementById("header");
const button = document.getElementById("button");
window.addEventListener('scroll', function() {
    if (window.scrollY > 190) {
        header.style.backgroundColor = 'white';
    } else {
        header.style.backgroundColor = '#ffc017';
    }
});
window.addEventListener('scroll', function() {
    if (window.scrollY > 190) {
        button.style.backgroundColor = '#1a8917';
    } else {
        button.style.backgroundColor = 'black';
    }
});