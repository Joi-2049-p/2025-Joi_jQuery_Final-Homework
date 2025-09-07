$(document).ready(function () {
  // ============ navbar toggle ==================//
  $("nav li a").click(function (event) {
    event.preventDefault();
    $(this).toggleClass("active");
  });

  $(".nav-bnt-1").click(function (event) {
    event.preventDefault();
    $(".item_1").slideToggle();
    $(this).parent().siblings().find(".item_2,.item_3").slideUp();
    $(this)
      .parent()
      .siblings()
      .find(".nav-bnt-2,.nav-bnt-3")
      .removeClass("active ");
  });

  $(".nav-bnt-2").click(function (event) {
    event.preventDefault();
    $(".item_2").slideToggle();
    $(this).parent().siblings().find(".item_1,.item_3").slideUp();
    $(this)
      .parent()
      .siblings()
      .find(".nav-bnt-1,.nav-bnt-3")
      .removeClass("active ");
  });

  $(".nav-bnt-3").click(function (event) {
    event.preventDefault();
    $(".item_3").slideToggle();
    $(this).parent().siblings().find(".item_1,.item_2").slideUp();
    $(this)
      .parent()
      .siblings()
      .find(".nav-bnt-1,.nav-bnt-2")
      .removeClass("active ");
  });

  // ============ offcanvas ==================//
  $(".hamburger-bnt").click(function (event) {
    event.preventDefault();
    $(".side_menu").toggleClass("menu_open");
    $(this).removeClass("active");
  });

  $(".menu-close").click(function (event) {
    event.preventDefault();
    $(".side_menu").toggleClass("menu_open");
  });

  // ============ ScrollTop==================//
  $(".scroll_bnt a").click(function (event) {
    event.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  // ============ Swiper ==================//

  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    speed: 3000,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    effect: "slide",

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // ============ lightbox ==================//

  lightbox.option({
    resizeDuration: 500,
    wrapAround: true,
  });
});
