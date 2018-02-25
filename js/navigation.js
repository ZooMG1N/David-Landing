$(document).ready(function () {
    $('.menu-link').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        var navbarHeight = $(".menu").outerHeight();
        $('html').animate({ scrollTop: destination-navbarHeight}, 1000);
    });
});