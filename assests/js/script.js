(function ($) {

    /*
        1. 
    */

    //1. Review Slider
    $(".hero-thumb-slider").slick({
        slidesToShow: 1,
        autoplay: true,
        speed: 100,
        dots: false,
        arrows: false,
        centerMode: true,
    });

    //1. Review Slider
    $(".review-slider").slick({
        slidesToShow: 1,
        autoplay: true,
        speed: 100,
        dots: true,
        arrows: false,
    });

    //1. Testimonial Slider
    // $(".testimonial-slider").slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     speed: 100,
    //     arrows: true,
    //     dots: false,
    //     centerMode: true,
    //     variableWidth: true,
    //     prevArrow: '<button class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
    //     nextArrow: '<button class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
    // });

    

    document.addEventListener('DOMContentLoaded', () => {
        // Select all accordion items
        const accordionItems = document.querySelectorAll('.accordion-item');

        accordionItems.forEach((item) => {
            const collapse = item.querySelector('.accordion-collapse');

            // Add event listeners for collapse events
            collapse.addEventListener('show.bs.collapse', () => {
                item.classList.add('active-item'); // Replace 'active-item' with your desired class
            });

            collapse.addEventListener('hide.bs.collapse', () => {
                item.classList.remove('active-item');
            });
        });
    });







})(jQuery)



