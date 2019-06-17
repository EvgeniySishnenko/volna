const homeNewsBtn = require('./homeNewsBtn');
const mentorsBtn = require('./mentorsBtn');
function more() {
    if (document.querySelector('.news')) {
        homeNewsBtn(); 
    }
    if (document.querySelector('.mentors')) {
        mentorsBtn();
    }
    
}

module.exports = more;