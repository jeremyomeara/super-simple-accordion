$(document).ready(function ($) {
    $('.accordion').hide();

    $('.accordion').parent('li').click(function () {
        $('.accordion', this).slideDown();
    });

    $('.accordion').parent('li').mouseleave(function () {
        $('.accordion').slideUp();
    });
});
