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
});

$(document).ready(function () {
    $('.slider ul').lightSlider({
        item: 1,
        loop: false,
        controls: true,
        slideMove: 1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 700
    });
});