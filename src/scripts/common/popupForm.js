function popupForm () {
    
    let inProcess = 0;

    if(inProcess == 0) {
        setTimeout(() => {
            if(!$('.popop__form-wr').hasClass('popop__form-wr--show'))  {
                $('.popop__form-wr').addClass('popop__form-wr--show');
                inProcess = 1;
            }
        }, 7000);
    }

    $('.popop__form--svg').on('click', ()=>{
        $('.popop__form-wr').removeClass('popop__form-wr--show');
    });

}
module.exports = popupForm;