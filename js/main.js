$('#header_carousel').owlCarousel({
    loop: true,
    center: true,
    autoplay: true,
    autoPlaySpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation-header_carousel .owl-nav-prev'), $('.owl-navigation-header_carousel .owl-nav-next')],
    responsive: {
        0: {
            items: 1
        },
        960: {
            items: 3
        }
    }
});