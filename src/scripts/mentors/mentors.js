const mentorsBtn = require('../more/mentorsBtn');
function mentors () {
    let select, attr;

    if (sessionStorage.getItem('attr')) {

        $('.chk').removeClass('checked');
        $('.chk').removeAttr('checked');
       
        
        attr = sessionStorage.getItem('attr');
        select = sessionStorage.getItem('select');
        
        $('.' + attr).addClass('checked');

        console.log(select);

        $('.' + select + ':hidden').slice(0, 20).fadeIn(800);



        if ($('.' + select + ':hidden').length == 0) {

            $('.btn-more__mentors').hide();
        } else {
            $('.btn-more__mentors').show();
        }


    } else {
        $('.chk.chk_all').addClass('checked');
        $('.chk.chk_all').attr('checked', 'true');
        $('.mentors__item').slice(0, 20).show();
    }

    $('.chk').click(function () {
        
        
        $('.chk').removeClass('checked');
        $('.chk').removeAttr('checked');

        $(this).addClass('checked');
        attr = $(this).attr('data-attr');
      
        $('.mentors__item, .digital, .marketing').hide();

        if (attr == 'chk_dgt') {
            select = 'digital';

        } else if (attr == 'chk_mrk') {
            select = 'marketing';
        }else {
            select = 'mentors__item';
        }

        $('.' + select + ':hidden').slice(0, 20).fadeIn(800);
       

        
        if ($('.' + select + ':hidden').length == 0) {
            
            $('.btn-more__mentors').hide();
        }else {
            $('.btn-more__mentors').show();
        }

        sessionStorage.setItem('attr', attr);
        sessionStorage.setItem('select', select);
        
    });
    
}

module.exports = mentors;