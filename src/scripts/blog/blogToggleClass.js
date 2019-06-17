const getCurrentZone = require('../common/getCurrentZone');
function blogToggleClass() {
    $('.blog__header-item').on('click', (e) => {
        const target = getCurrentZone(e.target, 'blog__header-item');
        $(target).toggleClass('blog__sub-item--toggle');
    });
    $('.blog__header-item-reset').on('click', ()=>{
        // sessionStorage.removeItem('map');
        
        $('.blog__search-year >.blog__header-item__shrt-txt').text('Год');
        $('.blog__search-month >.blog__header-item__shrt-txt').text('Месяц');

        const map = {
            attrYear: 'year_all',
            attrMonth: 'month_all',
            valYear: 'Год',
            valMonth: 'Месяц'
        }
        
        if (!sessionStorage.getItem('map')) {
            sessionStorage.setItem('map', JSON.stringify(map));
        } else {
            sessionStorage['map'] = JSON.stringify(map);
        }

        $('.month_all').fadeIn(800);
        $('.year_all').fadeIn(800);
        // location.reload();
        
    });
}
module.exports = blogToggleClass;