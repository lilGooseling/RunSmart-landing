$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="src/icons/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="src/icons/arrow_right.png"></button>'
    });
});