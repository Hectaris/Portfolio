/*-----------------------------------------------------------------------------------

    Theme Name: cavo
    Theme URI: http://
    Description: Creative Agency & Portfolio
    Author: UI-ThemeZ
    Author URI: http://themeforest.net/user/UI-ThemeZ
    Version: 1.0

-----------------------------------------------------------------------------------*/


$(function () {

    "use strict";
  


    /* ===============================  Swiper slider  =============================== */


    var parallaxShowCase;
    var parallaxShowCaseOptions = {
        speed: 1000,
        autoplay: true,
        parallax: true,
        mousewheel: true,
        loop: true,

        on: {
            init: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i])
                        .find('.bg-img')
                        .attr({
                            'data-swiper-parallax': 0.75 * swiper.width
                        });
                }
            },
            resize: function () {
                this.update();
            }
        },

        pagination: {
            el: '.showcase-full .parallax-slider .swiper-pagination',
            type: 'fraction',
            clickable: true
        },

        navigation: {
            nextEl: '.showcase-full .parallax-slider .next-ctrl',
            prevEl: '.showcase-full .parallax-slider .prev-ctrl'
        }
    };
    parallaxShowCase = new Swiper('.showcase-full .parallax-slider', parallaxShowCaseOptions);


     /* ===============================  interactive links  =============================== */

    $('.inter-links-center .links-text li').on('mouseenter', function () {
        var tab_id = $(this).attr('data-tab');
        $('.links-text li').removeClass('current');
        $(this).addClass('current');

        $('.links-img .img').removeClass('current');
        $("#" + tab_id).addClass('current');

        if ($(this).hasClass('current')) {
            return false;
        }
    });

    $('.inter-links-center .links-text li').on('mouseleave', function () {
        $('.links-text li').removeClass('current');
        $('.links-img .img').removeClass('current');
    });


    $('.inter-links-center .links-text li').on('mouseenter', function () {
        $(this).removeClass('no-active').siblings().addClass('no-active');
    });

    $('.inter-links-center .links-text li').on('mouseleave', function () {
        $('.inter-links-center .links-text li').removeClass('no-active');
    });

});

