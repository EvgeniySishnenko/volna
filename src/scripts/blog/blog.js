const blogToggleClass = require('./blogToggleClass');
const blogFilter = require('./blogFilter');
const blogSession = require('./blogSession');
function blog() {
    blogToggleClass();
    blogFilter();
    blogSession();
}
module.exports = blog;