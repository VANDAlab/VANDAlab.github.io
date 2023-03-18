(function() {
    var slider = document.getElementById('image-slider');
    var images = slider.getElementsByTagName('img');
    var currentIndex = 0;
    var interval = 3000; // Duration in milliseconds between image changes

    function changeImage() {
        images[currentIndex].classList.remove('visible');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('visible');
    }

    setInterval(changeImage, interval);
})();
