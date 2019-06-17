function homeNewsBtn () {
    let curItm = 20;

    if (sessionStorage.getItem('items')) {
        curItm = sessionStorage.getItem('items');
    }



    $('.news__item').slice(0, curItm).show();

    $('.btn-more__home-news').on('click', (e) => {


        $('.news__item:hidden').slice(0, 20).fadeIn(600);

        sessionStorage.setItem('items', $('.news__item:visible').length);

        if ($('.news__item:hidden').length == 0) {
            $('.btn__show-more').hide();
        }
    });

    if ($('.news__item:hidden').length == 0) {
        $('.btn-more__home-news').hide();
    }
}
module.exports = homeNewsBtn;