$(function() {
/* ==================================================
    # Offer Carousel
    ===============================================*/
    $('.services').owlCarousel({
    loop: false,
    margin: 15,
    responsiveClass:true,
    dots: false,
    autoplay: true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:false
        }
    }
})

/* ==================================================
    # Offer Carousel for testimonials
    ===============================================*/
    $('.testimonials').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:2,
                nav:false,
                loop:false
            }
        }
    });
/* ==================================================
# Nice Select
===============================================*/
$('select:not(.ignore)').niceSelect();      
FastClick.attach(document.body);
/* =========================================
               Portfolio
============================================ */
$(window).on('load', function () {

    // Initialize Isotope
    $("#isotope-container").isotope({});
    
    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {
    
        // get filter value
        var filterValue = $(this).attr('data-filter');
    
        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });
    
        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
    });
    

});
