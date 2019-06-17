function locationActiveLink () {
    $('.header__nav--link').each(function () {
        if (this.href == location.href) $(this).addClass('header__nav--link-active');
    });
    $('.content__menu--link').each(function () {
        if (this.href == location.href) $(this).addClass('content__menu--link-active');
    });
}

module.exports = locationActiveLink;