function showHideMenu () {

    $('.btn__menu').on('click', ()=> {
        $('.popup-menu').addClass('popup-menu--show');
        $('.wrap-menu-mobile').addClass('wrap-menu-mobile--show');
    });

    $('.closed__menu-mobile, .popup-menu-left, .popup-menu-right, .header__nav--list, .block__social').on('click', ()=> {
        $('.popup-menu').removeClass('popup-menu--show');
        $('.wrap-menu-mobile').removeClass('wrap-menu-mobile--show');
    });

    window.addEventListener("resize", function () {
        
        if (innerWidth > 992) {
            $('.popup-menu').removeClass('popup-menu--show');
            $('.wrap-menu-mobile').removeClass('wrap-menu-mobile--show');
        }
    }, false);

    $('.wrap-menu-mobile .header__nav--link').on('click', (e)=>{

        e.preventDefault();

        const target = e.target;

        $('.popup-menu').removeClass('popup-menu--show');
        $('.wrap-menu-mobile').removeClass('wrap-menu-mobile--show');
       
        setTimeout(() => {
            document.location.href=$(target).attr('href');
        }, 300);
        
    });
}
module.exports = showHideMenu;