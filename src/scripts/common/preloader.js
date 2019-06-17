function preloader () {
    window.onload = function () {
        // $('.preloader').delay(500).fadeOut(800);
        // $('.contacts').addClass('contacts-start');
        // $('.about').addClass('about-start');

        setTimeout(() => {
            // $('.preloader').addClass('preloader-show');
            $('.preloader').delay(500).fadeOut(800);
            $('.contacts').addClass('contacts-start');
            $('.about').addClass('about-start');

        }, 500);
        
        
    }
    
}
module.exports = preloader;