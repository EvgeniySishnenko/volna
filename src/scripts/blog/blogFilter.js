const getCurrentZone = require('../common/getCurrentZone');
const blogJSON = require('./blogObj');

function blogFilter() {
    let attrYear, attrMonth, valYear, valMonth;

    if (sessionStorage.getItem('map')) {

        attrYear = JSON.parse(sessionStorage.getItem('map')).attrYear;
        valYear = JSON.parse(sessionStorage.getItem('map')).valYear;

        attrMonth = JSON.parse(sessionStorage.getItem('map')).attrMonth;
        valMonth = JSON.parse(sessionStorage.getItem('map')).valMonth;
    }

    
    $('.blog__header__sub-item').on('click', (e)=>{

        const target = e.target;

        if (sessionStorage.getItem('map')) {

            attrYear = JSON.parse(sessionStorage.getItem('map')).attrYear;
            valYear = JSON.parse(sessionStorage.getItem('map')).valYear;
    
            attrMonth = JSON.parse(sessionStorage.getItem('map')).attrMonth;
            valMonth = JSON.parse(sessionStorage.getItem('map')).valMonth;
        }

        if ($(target).hasClass('sub-item-year')) {
            attrYear = $(target).attr('attr');
            valYear = $(target).text();
            $('.blog__search-year >.blog__header-item__shrt-txt').text(valYear);
           

        } else {
            attrMonth = $(target).attr('attr');
            valMonth = $(target).text();
            $('.blog__search-month >.blog__header-item__shrt-txt').text(valMonth);

          
        }


        if ($('.main__blog').hasClass('main__blog-def')) {
            $('.main__blog').removeClass('main__blog-def');
        }

        $('.blog__content--list').hide();

        
        
        if (attrMonth != undefined && attrYear == undefined)  {
            
            if ($('.blog__content--list').hasClass(attrMonth)) {
                
                $('.' + attrMonth).fadeIn(800);

            }else {
               
                $('.main__blog').addClass('main__blog-def');
            }

            
        } else if (attrMonth == undefined && attrYear != undefined) {
           
            if ($('.blog__content--list').hasClass(attrYear)) {
                
                $('.' + attrYear).fadeIn(800);


            } else {
               
                $('.main__blog').addClass('main__blog-def');
            }

            
        } else {

            if ($('.' + attrYear).hasClass(attrMonth)) {
                
                $('.' + attrYear + '.' + attrMonth).fadeIn(800);

            } else {
                
                $('.main__blog').addClass('main__blog-def');
            }
           
            
    }
       
        const map = {
            attrYear: attrYear,
            attrMonth: attrMonth,
            valYear: valYear,
            valMonth: valMonth
        }
        
        if (!sessionStorage.getItem('map')) {
            sessionStorage.setItem('map', JSON.stringify(map));
        } else {
            sessionStorage['map'] = JSON.stringify(map);
        }
        
    });

    
    
}
module.exports = blogFilter;