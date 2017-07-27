$(document).ready(function () {
    $('.sliderMini ul').lightSlider({
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


    // lightbox.option({
    //     'resizeDuration': 200,
    //     'wrapAround': true
    // });

    (function () {
        var $menuButton = $('#show-menu');
        var $mainMenu = $('.main-menu');

        $(window).on("load resize", function () {
            $menuButton.on('click', function () {
                if( $(document).width() <= 767 ) {
                    $mainMenu.toggleClass('active');
                }
            });
            if( $(document).width() > 767 ) {
                $mainMenu.toggleClass('active');
            }
        })
    })();


    (function () {
        var $menuButton = $('#show-menu');
        var $mainMenu = $('.main-menu');
        console.log("start");

        $menuButton.on('click', function () {
            if( $(document).width() <= 767 ) {
                $mainMenu.toggleClass('active');
            } else if ($(document).width() > 767) {
                $mainMenu.removeClass('active');
            }
            console.log("click;");
        });

        $(window).on("load resize", function () {
            console.log("resize");
        })
    })();


});
