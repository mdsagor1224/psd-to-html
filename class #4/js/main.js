$(document).ready(function(){

    // slider-active
    $('.slider-active').owlCarousel({
        loop:true,
        nav:true,
        navText:['<i class="fa-solid fa-angle-left"></i>',' <i class="fa-solid fa-angle-right"></i>'],
       dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    // project-active
    $('.project-active').owlCarousel({
        loop:true,
        nav:true,
        navText:['<i class="fa-solid fa-angle-left"></i>',' <i class="fa-solid fa-angle-right"></i>'],
       dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4
            }
        }
    })

    //video popup
    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
      });
})