(function($) {

    "use strict";

    $(window).on('load', function() {

        /*Page Loader active
        ========================================================*/
        $('#preloader').fadeOut();
        // Sticky Nav
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 50) {
                $('.scrolling-navbar').addClass('top-nav-collapse');
            } else {
                $('.scrolling-navbar').removeClass('top-nav-collapse');
            }
        });
        // one page navigation 
        $('.navbar-nav').onePageNav({
            currentClass: 'active'
        });


    });

}(jQuery));