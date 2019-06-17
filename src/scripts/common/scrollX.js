function scrollX() {

    const paralax = (function(){
        const elem = document.querySelector('.btn__menu');

        return{ 
            
            move: function(elem, wScroll, strafeEmount) {

                const strafe = wScroll / strafeEmount + '%';
                const transformString = 'translate3d('+strafe+', -50%, 0)';
                const rect = elem.getBoundingClientRect();
                const windWidth = window.innerWidth;  
                const windWidth1 = windWidth / 2 ;

                const style = elem.style;

               
               
               

                if(rect.right < windWidth1) {
                    
                    style.transform = transformString;
                    style.webkitTransform = transformString;
                    
                }
                
                if(document.documentElement.scrollTop) {
                    style.transform = transformString;
                    style.webkitTransform = transformString;
                    console.log('if');
                }
                
                
            },
            init: function(wScroll) {

                this.move(elem, wScroll, 1.3);
                
            }
        }   

    }());

    window.onscroll = function () {
        const wScroll = window.pageYOffset;

        paralax.init(wScroll);

        
    }
}
module.exports = scrollX;