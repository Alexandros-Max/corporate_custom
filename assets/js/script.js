(function ($) {
    "use strict";
    // ---------------------------------- Home page main slider
    var homeMainSliderImages = new Swiper(".home-main-slider-images", {
        direction: "vertical",
        loop: true,
        draggable: false,
        speed: 2000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
    });
    var homeMainSlider = new Swiper(".home-main-slider", {
        direction: "vertical",
        loop: true,
        draggable: true,
        speed: 2000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: true,
        },
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        thumbs: {
            swiper: homeMainSliderImages
        },
    });
    $('.home-main-slider .swiper-slide').on('change', function () {
        $(this).addClass('animation');
    });
    // ---------------------------------- Home page blog slider
    var swiper = new Swiper(".blog-slider", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: false,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },
    });
    // ----------------------------------  Insta slider
    var swiper = new Swiper(".insta-slider", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: false,
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
            1800: {
                slidesPerView: 6,
            },
        },
    });


    // ---------------------------------- Catergory/product slider
    var swiper = new Swiper(".cat-slider", {
        slidesPerView: "auto",
        spaceBetween: 40,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    var swiper = new Swiper(".product-slider", {
        slidesPerView: 1,
        spaceBetween: 40,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        },
    });
    var swiper = new Swiper(".project-slider", {
        slidesPerView: 1,
        spaceBetween: 40,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        },
    });
    if ($('.product-pills ').length) {
        var swiper = new Swiper(".product-pills", {
            slidesPerView: "auto",
            spaceBetween: 20,
            navigation: {
                nextEl: ".cp-pills1  .swiper-button-next",
                prevEl: ".cp-pills1  .swiper-button-prev",
            },
        });
    }
    if ($('.product-pills2 ').length) {
        var swiper = new Swiper(".product-pills2", {
            slidesPerView: "auto",
            spaceBetween: 20,
            navigation: {
                nextEl: ".cp-pills2  .swiper-button-next",
                prevEl: ".cp-pills2  .swiper-button-prev",
            },
        });
    }
    if ($('.product-pills3 ').length) {
        var swiper = new Swiper(".product-pills3", {
            slidesPerView: "auto",
            spaceBetween: 20,
            navigation: {
                nextEl: ".cp-pills3  .swiper-button-next",
                prevEl: ".cp-pills3  .swiper-button-prev",
            },
        });
    }

    // ---------------------------------- Sticky header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('.header-middle').addClass('sticky');
            if (!($('.color-intro').length)) {
                $('.header-wrapper').css('padding-top', '120px');
            }
        } else {
            $('.header-middle').removeClass('sticky');
            $('.header-wrapper').css('padding-top', '0');
        }
    });

    // ---------------------------------- Scroll to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('.header-middle').addClass('sticky');
            $('.back-to-top').show();
        } else {
            $('.header-middle').removeClass('sticky');
            $('.back-to-top').hide();
        }
    });
    $('.back-to-top').on('click', function (evt) {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        evt.preventDefault();
    });



    // ---------------------------------- MObile menu
    $('.aside-side-menu-wrapper .main-nav .main-nav-item i').on('click', function (evt) {
        if ($('.has-submenu.open').length) {
            $('.has-submenu').removeClass('open');
        }
        $(this).parents('.has-submenu').toggleClass('open');

        evt.preventDefault();
    });


    // ---------------------------------- Nice Select INIT
    $('select').niceSelect();


    // ---------------------------------- WOW INIT
    new WOW().init();

    // ---------------------------------- Color script
    $(window).on('load', function (event) {


        if ($('.color-intro').length) {
            $('.header-wrapper').addClass('header-color');
            /*if (!($('.color2').length)) {
                $('.contact-home,footer').mouseenter(function () {
                    $('body').css('overflow', 'unset');
                });
                $('.contact-home,footer').mouseleave(function () {
                    $('body').css('overflow', 'hidden');
                });
            }*/
            $('.contact-home').appendTo('#contactScroll');
            $('.footer-section').appendTo('#contactScroll');
            $( "#contactScroll .wow" ).each( function() {
                $(this).removeClass('wow');
                $(this).removeClass('fadeInUp');
                $(this).css('visibility', 'visible');
              } );
            var footContactHeight = $('#contactScroll .contact-home').outerHeight();
            $('#contactScroll .color-scroll.scroll-down.scroll-up').css('top', (footContactHeight - 80));
        }

        if ($('.color-introslider').length) {
            $('.header-wrapper').addClass('header-color');

            
            /*$('.contact-home').appendTo('#contactScroll');
            $('.footer-section').appendTo('#contactScroll');
            $( "#contactScroll .wow" ).each( function() {
                $(this).removeClass('wow');
                $(this).removeClass('fadeInUp');
                $(this).css('visibility', 'visible');
              } );
            var footContactHeight = $('#contactScroll .contact-home').outerHeight();
            $('#contactScroll .color-scroll.scroll-down.scroll-up').css('top', (footContactHeight - 80));*/
        }

        if ($('.color-tourslider').length) {
            $('.header-wrapper').addClass('header-color');
        }
    });

    // ---------------------------------- Bluecircle Rotation
    $(window).on('load', function (event) {

        var colorcircleRotation = 0;
        $(window).scroll(function () {
            colorcircleRotation += 5;
            $('.colorcircle').css('rotate', colorcircleRotation + 'deg')
        });
    });


    function masonryBuilder() {
        if (($('.masonry-with-columns').length) && ($(window).width() > 767)) {
            var numCols = 2;
            if ($(window).width() > 991) {
                numCols = 3;
                console.log('aaa');
            } else {
                numCols = 1;
                console.log('bbb');
            }
            var colHeights = Array(numCols).fill(0);
            var container = document.getElementById('masonry-with-columns');
            Array.from(container.children).forEach((child, i) => {
                var order = i % numCols;
                child.style.order = order;
                colHeights[order] += parseFloat(child.clientHeight);
            })
            container.style.height = Math.max(...colHeights) + 'px';
        }
    }


    
    // ---------------------------------- Color page full slider
    if($('.color-introslider').length){
        $('body').css('overflow', 'hidden');
        var swiperColorIntro = new Swiper(".color-introslider-imgs", {
            slidesPerView: 1,
            spaceBetween: 0,
            modules: [SwiperGL],
            speed: 2000,
            loop: true,
            effect: 'gl',
            gl: {
                shader: ['ripple'],
            },
            draggable: true,
            mousewheel: true,
            autoplay:false,
            preventInteractionOnTransition: true,
            thumbs: {
                swiper: swiperColorIntroThumbs
            },
        });
        
        var swiperColorIntroThumbs = new Swiper(".color-introslider-thumbs", {
            loop: true,
            draggable: true,
            speed: 2000,
            draggable: true,
            mousewheel: true,
            autoplay:false,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
              },
            slidesPerView: 1,
            thumbs: {
                swiper: swiperColorIntro
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
        
          
        var slideEnded = false;
        swiperColorIntro.on('fromEdge', function(){
            if (slideEnded){
                slideEnded = false;
                $('.color-introslider-helper').show();
            }
        });
        swiperColorIntro.on('reachEnd', function(){
            $('.color-introslider-helper').hide();
            $('.last-slide .bounZe').addClass('active');
            slideEnded = true;
            
            //setTimeout(function(){swiperColorIntro.slideTo(0, 0);}, 8000);
        });
    }
    
    
    // ---------------------------------- Color TOur page full slider
    if($('.color-tourslider').length){
        $('body').css('overflow', 'hidden');
        var swiperColorTour = new Swiper(".color-tourslider", {
            slidesPerView: 1,
            spaceBetween: 0,
            modules: [SwiperGL],
            speed: 1000,
            effect: 'gl',
            gl: {
                shader: ['ripple', 'morph-x', 'morph-y', 'wave-x'],
                shaderPerSlide: true,
            },
            draggable: true,
            mousewheel: true,
            autoplay: {
              delay: 8000,
            },
            loop: true,
            preventInteractionOnTransition: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                768: {
                },
            },
        });

          
        var slideEnded = false;
        swiperColorTour.on('fromEdge', function(){
            if (slideEnded){
                slideEnded = false;
                $('.color-tourslider-helper').show();
            }
        });
        swiperColorTour.on('reachEnd', function(){
            $('.color-tourslider-helper').hide();
            $('.last-slide a').addClass('active');
            slideEnded = true;
        });
        
        
        
        $(".nextslide").click(function() {
            swiperColorTour.slideTo(1, 0);
        });
        
        /*-----------------
        Color tour more btn
        ------------------*/
        $(".tourslider-action").click(function() {
            $('.tourslider-popup').toggleClass('active');
        });
        
        $('.megaslide-content').on("click", function (e) {
            e.target === this && $('.tourslider-popup').removeClass('active') ;
        });
        
        swiperColorTour.on('slideChange', function(){
            $('.tourslider-popup').removeClass('active') ;
        });
    }

    
    // ---------------------------------- About page image slider
    if($('.about-intro-slider').length){
        var swiperColorIntro = new Swiper(".about-intro-slider", {
            slidesPerView: 1,
            spaceBetween: 0,
            modules: [SwiperGL],
            speed: 1000,
            effect: 'gl',
            gl: {
                shader: ['morph-x', 'morph-y', 'wave-x', 'ripple'],
            },
            draggable: true,
            mousewheel: false,
            autoplay: true
        });
    }


    
    if ($('.about-history-slider').length) {
        var swiper = new Swiper(".about-history-slider", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            effect: 'fade',
            navigation: {
                nextEl: ".about-history-slider .swiper-history-next",
                prevEl: ".about-history-slider .swiper-history-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }

    
    // ---------------------------------- Preloader
    $(window).on('load', function (event) {
        //$('.preloader').delay(500).fadeOut('500');
        $('body').delay(500).addClass('loaded');

        masonryBuilder();
    });


    $(window).resize(function () {
        masonryBuilder();
    });


    

    
    // ---------------------------------- About page BG
    $(window).on('load', function (event) {
        if($('.about-intro').length){
            $('body').addClass('about-bg');
        }
    });

    // ---------------------------------- Color pallete expand
    $(window).on('load', function (event) {
        if($('.wood-colors-gallery .single-collection').length){
            $(".wood-colors-gallery .single-collection").each(function() {
                var paletHeight = $(this).find('.color-palets').outerHeight();
                var testHeight = 0;
                var fixedHeight = 0;
                if ($(window).outerWidth() < 550) {
                    testHeight = 433;
                    fixedHeight = 420;
                } else if ($(window).outerWidth() < 710) {
                    testHeight = 453;
                    fixedHeight = 340;
                } else if ($(window).outerWidth() < 768) {
                    testHeight = 463;
                    fixedHeight = 350;
                } else if ($(window).outerWidth() < 992) {
                    testHeight = 443;
                    fixedHeight = 430;
                } else if ($(window).outerWidth() < 1500) {
                    testHeight = 443;
                    fixedHeight = 430;
                } else if ($(window).outerWidth() < 1600) {
                    testHeight = 473;
                    fixedHeight = 460;
                } else {
                    testHeight = 413;
                    fixedHeight = 400;
                }
                if(paletHeight > testHeight) {
                    $(this).find('.color-palets').css('height',fixedHeight)
                    $(this).find('.show-more-palets').show();
                }
            });
            $('.show-more-palets').on('click', function (evt) {
                $(this).closest('.single-collection').toggleClass('active');
            });
        }
    });


})(jQuery);