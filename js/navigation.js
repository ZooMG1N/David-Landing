$(document).ready(function () {
    $('.menu-link').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html').animate({ scrollTop: destination}, 1500);
    });
});

