$(document).ready(function () {
    $('.slider-mini ul').lightSlider({
        item: 3,
        loop: false,
        slideMove: 1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    item: 2,
                    slideMargin: 6
                }
            },
            {
                breakpoint: 600,
                settings: {
                    item: 1
                }
            }
        ]
    });


    $('.slider ul').lightSlider({
        item: 1,
        loop: false,
        controls: true,
        slideMove: 1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 700
    });


    (function () {
        var $menuItem = $('#show-menu');
        var $mainMenuLi = $('.main-menu > ul > li');

        $mainMenuLi.each(function (i, e) {
            $(this).on('hover',  function () {
                $(this).addClass('opened');
            });
        })
    })();


    (function () {
        var $menuButton = $('#show-menu');
        var $mainMenu = $('.main-menu');

        $menuButton.on('click', function () {
            if( $(document).width() <= 767 ) {
                $mainMenu.toggleClass('active');
            } else if ($(document).width() > 767) {
                $mainMenu.removeClass('active');
            }
        });

        $(window).on("load resize", function () {
            if ($(document).width() > 767) {
                $mainMenu.removeClass('active');
            }
        })
    })();
});
