$('.dropdown').on('show.bs.dropdown', function(e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
});

$('.dropdown').on('hide.bs.dropdown', function(e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
});

$('#agent').owlCarousel({
    loop: true,
    margin: 20, // Margin-right = 20px
    nav: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 1000,
    smartSpeed: 1000,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        768: {
            items: 2
        },
        1024: {
            items: 3
        },
        1367: {
            items: 3
        },
        1900: {
            items: 4
        }
    }
});


$('#client').owlCarousel({
    loop: true,
    margin: 60, // Margin-right = 20px
    dots: false,
    autoplay: false,
    autoplaySpeed: 1000,
    smartSpeed: 1000,
    nav: true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 2,
        },
        768: {
            items: 4,
        },
        1025: {
            items: 4,
        },
        1366: {
            items: 6,
            touchDrag: false,
            pullDrag: false,
            mouseDrag: false,
        }
    }
});


$('.toggle').click(function(e) {
    e.preventDefault();

    $('.toggle').removeClass("icon");
    $(this).addClass("icon");

    var $this = $(this);
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.parent().parent().find('li .icon').removeClass('icon');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);

    }
});


$('.moreless-button').click(function() {
    $('.storehide').slideToggle();
    if ($('.moreless-button').text() == "Read more") {
        $(this).text("Read less")
    } else {
        $(this).text("Read more")
    }
});