function blogSession() {
    
    if (sessionStorage.getItem('map')) {

        const attrYear =  JSON.parse(sessionStorage.getItem('map')).attrYear;
        const attrMonth = JSON.parse(sessionStorage.getItem('map')).attrMonth;
        const valYear = JSON.parse(sessionStorage.getItem('map')).valYear;
        const valMonth = JSON.parse(sessionStorage.getItem('map')).valMonth;
  
        $('.blog__search-year >.blog__header-item__shrt-txt').text(valYear);
           
        $('.blog__search-month >.blog__header-item__shrt-txt').text(valMonth);

        $('.blog__content--list').hide();

        if ($('.main__blog').hasClass('main__blog-def')) {
            $('.main__blog').removeClass('main__blog-def');
        }

        if (attrMonth != undefined && attrYear == undefined) {

            if ($('.blog__content--list').hasClass(attrMonth)) {

                $('.' + attrMonth).fadeIn(800);

            } else {

                $('.main__blog').addClass('main__blog-def');
            }


        } else if (attrMonth == undefined && attrYear != undefined) {
            
            if ($('.blog__content--list').hasClass(attrYear)) {

                $('.' + attrYear).fadeIn(800);
                
            } else {
                
                $('.main__blog').addClass('main__blog-def');
            }
        }else {

            if ($('.' + attrYear).hasClass(attrMonth)) {
                
                    $('.' + attrYear + '.' + attrMonth).fadeIn(800);

                } else {

                    $('.main__blog').addClass('main__blog-def');
                }
        }

       
        
    } 

}
module.exports = blogSession;