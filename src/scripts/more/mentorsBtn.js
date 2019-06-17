function mentorsBtn() {
    let curItm = 20;
    let select = 'mentors__item';

    

    $('.btn-more__mentors').on('click', () => {
        if (sessionStorage.getItem('select')) {
            select = sessionStorage.getItem('select');
        }

        console.log('select btn ' + select);
        
        $('.' + select +':hidden').slice(0, 20).fadeIn(800);
       
        
        if ($('.' + select + ':hidden').length == 0) {
            $('.btn-more__mentors').hide();
        }
    });

    if ($('.mentors__item:hidden').length == 0) {
        $('.btn-more__mentors').hide();
    }
  
}
module.exports = mentorsBtn;