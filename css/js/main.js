jQuery(document).ready(function () {
    "use strict"
    $('header').ripples({
        dropRadius: 12,
        perturbance: 0.01,
    });

    var typed = new Typed('#typed', {
        // stringsElement: '.text',
        strings: ['Web Development 😎', 'Graphic Designing 🎃'],
        backSpeed: 30,
        typeSpeed: 60,
        loop: true
    });

    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if (top >= 60) {
            $("nav").addClass('secondary');
        }
        else {
            if ($("nav").hasClass('secondary')) {
                $("nav").removeClass('secondary');
            }
        }
    })
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - -2
        }, 1250, "easeInOutExpo");
    })
});

// window.addEventListener("scroll", function () {
//     let header = document.querySelector("nav");
//     header.classList.toggle("secondary", window.scrollY > 60);
// });