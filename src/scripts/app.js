const jquery = require("jquery");
const slick = require("./slick/slick");
const fancyboxShow = require("./fancybox/fancybox");
const $ = require("jquery");
const jQuery = require("jquery");
const showHideMenu = require("./common/showHideMenu");
window.jQuery = $;
const fancybox = require("@fancyapps/fancybox");
const btnUp = require("./common/btnUp");
const map = require("./common/map");
const popupForm = require("./common/popupForm");
const blog = require("./blog/blog");
const more = require("./more/more");
const mentors = require("./mentors/mentors");
const locationActiveLink = require("./common/locationActiveLink");
const crewScroll = require("./common/crewScroll");
const srcollAnimate = require("./common/srcollAnimate");
const preloader = require("./common/preloader");



if(document.querySelector('.wrapper')) {
    slick();
    fancyboxShow();
    showHideMenu();
    btnUp();
    map();
    popupForm();
    more();
    locationActiveLink();
    srcollAnimate();
    preloader();
}


if (document.querySelector('.mentors')) {
    mentors();
}

if (document.querySelector('.blog')) {
    blog();
}

if (document.querySelector('.crew')) {
    crewScroll();
}