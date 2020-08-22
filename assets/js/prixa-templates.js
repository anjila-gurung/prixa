$('.partner-list').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<div class="slick-slider-prev-btn "><span class="fa fa-angle-left "></span><span class="sr-only ">Prev</span></div>',
    nextArrow: '<div class="slick-slider-next-btn "><span class="fa fa-angle-right "></span><span class="sr-only ">Next</span></div>',

    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});
$('.testimony').slick({
        arrows: false,
        dots: true,
        prevArrow: '<div class="slick-slider-prev-btn "><span class="fa fa-angle-left "></span><span class="sr-only ">Prev</span></div>',
        nextArrow: '<div class="slick-slider-next-btn "><span class="fa fa-angle-right "></span><span class="sr-only ">Next</span></div>'
    }

);


// scroll js
$(window).scroll(function() {

    $('nav').toggleClass('scrolled', $(this).scrollTop() > 200);
});

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// $('.video-slider').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true,
//     prevArrow: '<div class="slick-slider-prev-btn "><span class="fa fa-angle-left "></span><span class="sr-only ">Prev</span></div>',
//     nextArrow: '<div class="slick-slider-next-btn "><span class="fa fa-angle-right "></span><span class="sr-only ">Next</span></div>',
//     responsive: [{
//         breakpoint: 1200,
//         settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1
//         }
//     }, {
//         breakpoint: 768,
//         settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//         }
//     }]
// });
// $('.slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.video-slider'
//   });

$('.image-slider').slick({
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 3,
    autoplaySpeed: 3000,
    prevArrow: '<div class="slick-slider-prev-btn "><span class="fa fa-angle-left "></span><span class="sr-only ">Prev</span></div>',
    nextArrow: '<div class="slick-slider-next-btn "><span class="fa fa-angle-right "></span><span class="sr-only ">Next</span></div>',
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});



//attempt for video slider
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    infinite: true,
    slidesToShow: 4,
    autoplay: false,
    autoplaySpeed: 3000,
    asNavFor: '.slider-for',
    dots: true,
    arrows: false,
    focusOnSelect: true,
    prevArrow: '<div class="slick-slider-prev-btn "><span class="fa fa-angle-left "></span><span class="sr-only ">Prev</span></div>',
    nextArrow: '<div class="slick-slider-next-btn "><span class="fa fa-angle-right "></span><span class="sr-only ">Next</span></div>',
    responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});