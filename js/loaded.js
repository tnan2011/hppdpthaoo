document.addEventListener("DOMContentLoaded", function() {
    var img = document.querySelector('img');
    img.addEventListener('load', function() {
        img.classList.add('loaded');
    });
    if (img.complete) {
        img.classList.add('loaded');
    }
});