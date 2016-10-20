$(document).ready(function () {
    myID = document.getElementById("myID");

    var myScrollFunc = function () {
        var y = window.scrollY;
        if (y > 300) {
            $(".menu-vinhomes").addClass("hiden-box");
            $(".btn-show-menu").addClass("menu-show-scroll")
        } else {
            $(".menu-vinhomes").removeClass("show-menu-hide");
            $(".menu-vinhomes").removeClass("hiden-box");
            $(".btn-show-menu").removeClass("menu-show-scroll");
            $(".btn-show-menu").removeClass("mar-width")

        }
        if (y > 300) {
            $(".menu-vinhomes").addClass("hiden-box");
            $(".btn-show-menu").addClass("menu-show-scroll")
        }
        if (y > $("#main-bg").height()) {
            $("#main-bg").addClass("remove-overflow");
        }
        else {
            $("#main-bg").removeClass("remove-overflow");

        }
    };

    window.addEventListener("scroll", myScrollFunc);
    $(".btn-show-menu").click(function () {
        $(this).toggleClass("mar-width");
        $(".menu-vinhomes").toggleClass("show-menu-hide");
    });
    function setHeight() {
        windowHeight = $(window).innerHeight();
        $('.video-left, .video-right').css('min-height', windowHeight);
        $('.bg-next-page').css('min-height', windowHeight - $('.banner-video').height());
    };
    setHeight();

    $(window).resize(function () {
        setHeight();
    });
    $('.__MB_NEWS_TAB li a').hover(function () {
        var getTabId = $(this).attr('id');
        $('.__MB_NEWS_TAB li a,.__MB_NEWS_TAB li').removeClass('active');
        $(this).addClass('active');
        $(this).parent().addClass('active');
        $('.__MB_CONTAINER_READ_' + getTabId).addClass('show-area');
        $('.__MB_CONTAINER_READ_' + getTabId).parent().addClass('show-area');
    }, function () {
        var getTabId = $(this).attr('id');
        $('.__MB_CONTAINER_READ_' + getTabId).removeClass('show-area');
        $('.__MB_CONTAINER_READ_' + getTabId).parent().removeClass('show-area');
    });
    // $('.box-mar-intro').width($(".intro-location-diamon").width() - 220);
    // $('.intro-location-diamon').height($(".map-location-diamon").height());
    $('.duan-scroll-page').height($("#imapper1-map-image").height() - 130);
    $(".header-page").height($(window).innerHeight());
    $(".menu-vinhomes").height($(window).innerHeight());
    $(".box-list-tour ul li a").each(function () {
        var result = $(this).text();
        var resultArray = result.split(" ");
        if (resultArray.length > 15) {
            resultArray = resultArray.slice(0, 15);
            result = resultArray.join(" ") + " ...";
            $(this).text(result);
        }
    });
    $(".ctn-item-news h3 a span").each(function(){
        var result = $(this).text();
        var resultArray = result.split(" ");
        if(resultArray.length > 10){
        resultArray = resultArray.slice(0, 10);
        result = resultArray.join(" ") + " ...";
        $(this).text(result);
        }
    });
    $('.tower-tab li').click(function () {
        var getTabId = $(this).attr('id');
        $('.tower-tab-read').hide();
        $('.tower-tab li a,.tower-tab li').removeClass('active');
        $(this).addClass('active');
        $(this).parent().addClass('active');
        $('.tower-tab-read-' + getTabId).show();
    });
    $('.tower-tab li').click(function () {
        var getTabId = $(this).attr('id');
        $('.tower-tab-read').hide();
        $('.tower-tab li a,.tower-tab li').removeClass('active');
        $(this).addClass('active');
        $(this).parent().addClass('active');
        $('.tower-tab-read-' + getTabId).show();
    });
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
    $(".btn-next-page").click(function () {
        $(".home-index").addClass('home-index-show');
        $(".home-page").removeClass("overflow-index");
        $(".home-video").addClass("hide-video").html('');
    });
    $(".menu-vinhomes .scroll-1").click(function () {
        $('html, body').animate({
            scrollTop: $(".intro-duan").offset().top
        }, 500);
    });   
    $(".menu-vinhomes .scroll-2").click(function () {
        $('html, body').animate({
            scrollTop: $(".map-duan").offset().top
        }, 500);
    });
    $(".menu-vinhomes .scroll-3").click(function () {
        $('html, body').animate({
            scrollTop: $(".super-branch").offset().top
        }, 500);
    });
    $(".menu-vinhomes .scroll-4").click(function () {
        $('html, body').animate({
            scrollTop: $(".box-map-vinhomes").offset().top
        }, 500);
    });
    $(".menu-vinhomes .scroll-5").click(function () {
        $('html, body').animate({
            scrollTop: $(".tower-c1").offset().top
        }, 500);
    });
    // $(".menu-vinhomes .scroll-6").click(function () {
    //     $('html, body').animate({
    //         scrollTop: $(".page-news").offset().top
    //     }, 500);
    // });
    // $(".menu-vinhomes .scroll-7").click(function () {
    //     $('html, body').animate({
    //         scrollTop: $(".page-news").offset().top
    //     }, 500);
    // });
    $(".menu-vinhomes .scroll-8").click(function () {
        $('html, body').animate({
            scrollTop: $(".page-news").offset().top
        }, 500);
    });
    $("#news-standard-slider").owlCarousel({
        navigation: true,
        pagination: false,
        lazyLoad: true,
        items: 4,
        navigationText: ["<span class='icon-prev'></span>", "<span class='icon-next'></span>"],
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [992, 2],
        itemsTablet: [768, 2],
        itemsTabletSmall: [600, 1]
    });
    $('.__MB_NEWS_TAB li a').click(function () {
        var getTabId = $(this).attr('id');
        $('.__MB_CONTAINER_READ').hide();
        $('.__MB_NEWS_TAB li a,.__MB_NEWS_TAB li').removeClass('active');
        $(this).addClass('active');
        $(this).parent().addClass('active');
        $('.__MB_CONTAINER_READ_' + getTabId).show();
    });
    if (screen.width > 1700) {
        $(".type-text").css("left", 300);
    };

    //load footer
    $('#dd-footer').load('footer.html');
    $('.header-social-icon').load('header-social-icon.html');
});