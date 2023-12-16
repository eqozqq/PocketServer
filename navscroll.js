document.addEventListener("DOMContentLoaded", function () {
    var nav = document.querySelector("nav");
    var lastScrollTop = 0;

    window.addEventListener("scroll", function () {
        var currentScrollTop = window.scrollY;

        if (currentScrollTop > lastScrollTop) {
            if (currentScrollTop > nav.offsetHeight) {
                if (!nav.classList.contains("sticky")) {
                    nav.classList.add("sticky");
                    document.body.classList.add("sticky-nav-padding");
                }
            }
        } else {
            if (currentScrollTop > nav.offsetHeight) {
                if (!nav.classList.contains("sticky")) {
                    nav.classList.add("sticky");
                    document.body.classList.add("sticky-nav-padding");
                }
            } else {
                if (!nav.classList.contains("sticky")) {
                    nav.classList.add("sticky");
                    document.body.classList.add("sticky-nav-padding");
                }
            }
        }

        lastScrollTop = currentScrollTop;
    });
});