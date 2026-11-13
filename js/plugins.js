// Nice Scroll 



$(document).ready(function () {
    $('.carousel').carousel({
        interval: 5000
    });
    $("html").niceScroll({
        mousescrollstep: 60,
        scrollspeed: 40,
        smoothscroll: true,
        touchbehavior: true,
        cursorwidth: "8px",
        cursoropacitymin: 0.5,
        cursoropacitymax: 1,
        emulatetouch: true
    });
    // Show Color Option When Click On The Gear
    $(".gear-check").click(function () {
        $(".color-option").fadeToggle();
    });

    // Change Theme Color On Click

    var colorLi = $(".color-option ul li");

    colorLi
        .eq(0).css("backgroundColor", "#E41b17").end()
        .eq(1).css("backgroundColor", "#84d30c").end()
        .eq(2).css("backgroundColor", "#177df1").end()
        .eq(3).css("backgroundColor", "#ad158c50");

    colorLi.click(function () {
        $("link[href*='Theme']").attr("href", $(this).attr("data-value"));
    });

    // Caching The Scroll Top Element

    var ScrollButton = $("#scroll-top");

    $(window).scroll(function () {

        console.log($(this).scrollTop());

        if ($(this).scrollTop() >= 700) {
            ScrollButton.show();
        }

        else {
            ScrollButton.hide();
        }
    });
    // Click On Button To Scroll Top

    ScrollButton.click(function () {
        $("html,body").animate({ scrollTop: 0 }, 600);
    });

});

// /Loading Screen

$(window).load(function () {
    $("body").css("overflow", "auto")
    $(".loading-overlay,.loading-overlay .spinner").fadeOut(2000,
        function () {

        });
});