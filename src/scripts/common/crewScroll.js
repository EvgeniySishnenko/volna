function crewScroll () {

    const animateCss = (function(){

        const checkDistance = function(scrollTop, elem) {

            const offset = elem.offset().top;
            const windowMargin = Math.ceil($(window).height() / 3 );
            const topBorder = offset - scrollTop - windowMargin;
            const bottomEdge = elem.outerHeight(true) + offset;
            const bottomBorder = scrollTop + windowMargin - bottomEdge;
            
            return topBorder <= 0 && bottomBorder <= 0;
        }

        const chkDstFrsItem = function(scrollTop) {

            const elem = $('.crew__item:first');

            const offset = elem.offset().top;
            const windowMargin = Math.ceil($(window).height() / 3 );
            const topBorder = offset - scrollTop - windowMargin;
            const bottomEdge = elem.outerHeight(true) + offset;
            const bottomBorder = scrollTop + windowMargin - bottomEdge;

            
            if(topBorder > 0) {
                if(elem.hasClass('animateItem')) {
                    elem.removeClass('animateItem');
                }
            }

        }

        const animationActions = {
            animateItem : function () {
                
                $(this).addClass('animateItem').siblings().removeClass("animateItem");
                
            }
        }

        return {
            init: function() {
                $(window).on('scroll', function (){
                    if ($(window).width() < 681) {
                        const scrollTop = $(window).scrollTop();
                        const elems = $('.animate');
                        
                        elems.each(function () {

                            const $this = $(this);
                            chkDstFrsItem(scrollTop);
                            if(checkDistance(scrollTop, $this)) {
                                const animationType = $this.data('animate');
                                animationActions[animationType].call($this);
                            }  
                        }) 
                    }
        
                });
            }
        }


    }());
    animateCss.init();
        

    $(window).resize(function () {
        if ($(window).width() > 681) {
            if($('.animate').hasClass('animateItem')) {
            $('.animate').removeClass('animateItem');
            }  
        }
        
    });
    
}
module.exports = crewScroll;