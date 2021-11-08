$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar, .menu").addClass("sticky");
        } else {
            $(".navbar, .menu").removeClass("sticky");
        }
    });

    // toggle menu/navbar main
    $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    // typing animation script
    /*var typed = new typed("typing", {
        String: ["Youtuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });*/

    var typed = new Typed(".typing", {
        strings: ["Rolplay"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["San Andreas"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
})