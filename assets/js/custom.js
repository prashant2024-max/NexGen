$(document).ready(function () {

  // AOS Initialize
  AOS.init({
    once: true,
    mirror: false,
    offset: 50,
    duration: 800,
    easing: "ease-in-out",
  });

  // Sticky Header
  $(window).on("scroll", function () {
    $("header").toggleClass("stickyHead", $(this).scrollTop() > 30);
  });

  // Hamburger menu toggle
  $(".menuIcon").on("click", function () {
    $(".menuCont").toggleClass("active");
    $("body").toggleClass("menu-open");

    if (!$(".menu-overlay").length) {
      $("header").append('<div class="menu-overlay"></div>');
    }
  });

  // Close menu
  $(document).on("click", ".menuClose, .menu-overlay", function () {
    $(".menuCont").removeClass("active");
    $("body").removeClass("menu-open");
    $(".menu-overlay").remove();
  });


  // Home Partners and Supporters Marquee
  $(".heroLogoMarquee").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3500,
    cssEase: "linear",
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1366,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 1280,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 850,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 601,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 500,
        settings: { slidesToShow: 3 },
      },
    ],
  });



  // toggle dropdown
  $(".selectPlaceholder").on("click", function (e) {
    e.stopPropagation();
    $(this).next(".selectOptions").toggle();
  });

  // select option
  $(".selectOption").on("click", function () {
    $(this).closest(".selectCountry").find(".selectPlaceholder").html($(this).html());
    $(".selectOptions").hide();
  });

  // click outside closes
  $(document).on("click", function () {
    $(".selectOptions").hide();
  }); 





  $(".psProductImg").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: "linear",
    pauseOnHover: false,
  });

  // Tab Section
  $(".tabBtn").click(function () {
    var tab_id = $(this).data("id");

    $(".tabBtn, .tab-content").removeClass("active");
    $(this).addClass("active");
    $("#" + tab_id).addClass("active");

    // Reinitialize Slick slider inside the active tab
    // $("#" + tab_id).find(".psAllArtBox").slick("setPosition");
  });

  // Map hover and mobile click code
  function isMobile() {
    return window.matchMedia("(max-width: 1023px)").matches;
  }

});

