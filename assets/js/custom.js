$(document).ready(function () {

  // Sticky Header
  $(window).on("scroll", function () {
    $("header").toggleClass("stickyHead", $(this).scrollTop() > 30);
  });

  // Hamburger Menu
  $(".menuIcon").on("click", function () {
    $(".menuCont").toggleClass("active");
    $("body").toggleClass("menu-open");
    $(".menu-overlay").toggleClass("active");
  });

  // Close menu
  $(document).on("click", ".menuClose, .menu-overlay.active", function () {
    $(".menuCont").removeClass("active");
    $("body").removeClass("menu-open");
    $(".menu-overlay").removeClass("active");
  });


  // Partners Marquee
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
    responsive: [
      { breakpoint: 1366, settings: { slidesToShow: 5 } },
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 850,  settings: { slidesToShow: 4 } },
      { breakpoint: 601,  settings: { slidesToShow: 4 } },
      { breakpoint: 500,  settings: { slidesToShow: 3 } },
    ],
  });



  // Dropdown Toggle
  $(".selectPlaceholder").on("click", function (e) {
    e.stopPropagation();
    $(".selectOptions").not($(this).next()).hide();
    $(this).next(".selectOptions").toggle();
  });

  // Select Option
  $(document).on("click", ".selectOption", function (e) {
    e.stopPropagation();
    $(this)
      .closest(".selectCountry")
      .find(".selectPlaceholder")
      .html($(this).html());
    $(".selectOptions").hide();
  });

  // Click outside
  $(document).on("click", function () {
    $(".selectOptions").hide();
  });



  // Product Slider
  $(".aboutSliderBox").slick({
    slidesToShow: 4.9,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1366, settings: { slidesToShow: 4 } },
      { breakpoint: 820,  settings: { slidesToShow: 3 } },
      { breakpoint: 601,  settings: { slidesToShow: 2 } },
      { breakpoint: 500,  settings: { slidesToShow: 1} },
    ],
  });


  // Product Slider 
  $(".psPortSlider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 300000,
    responsive: [
      { breakpoint: 1440, settings: { slidesToShow: 2 } },
      { breakpoint: 820,  settings: { slidesToShow: 2 } },
      { breakpoint: 768,  settings: { slidesToShow: 1 } }
    ],
  });

});
