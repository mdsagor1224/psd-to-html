$(document).ready(function(){
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
})