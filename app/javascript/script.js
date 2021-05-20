jQuery(document).ready(function(){
    $('.slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: [],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            480: {
                items: 1
            }
        }
    })
    $('.featured .owl-carousel').owlCarousel({
        loop: true,
        margin: 25,
        nav: true,
        dots: false,
        navText: [],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2
            },
            680: {
                items: 3
            },
            1024: {
                items: 4
            }
        }
    })
    $('.header__search').click(function(event){
        event.stopPropagation()
        $(this).addClass('header--activ')
    })

    $('body').click(function(){
        $('.header__search').removeClass('header--activ')
    })


})

var wow = new WOW(
    {
        boxClass: 'wow',    
        animateClass: 'animated', 
        offset: 300,          
        mobile: false,       
        live: true,      
        scrollContainer: null,    
        resetAnimation: true,    
    }
);
wow.init();    