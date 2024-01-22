!(function ($) {
  "use strict";
  $(document).on("click", ".mobile-nav-toggle", function (e) {
    $("body").toggleClass("mobile-nav-active");
    $(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close");
    $(".toggle-btn").hide();
  });

  if ($(document).on("click", ".mobile-nav-toggle", function () {
      $(".toggle-btn").hide();
  }));
  if ($(document).on("click", ".mobile-nav-active", function () {
      $(".toggle-btn").show();
  }));
  
  $(document).click(function (e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($("body").hasClass("mobile-nav-active")) {
        $("body").removeClass("mobile-nav-active");
        $(".mobile-nav-toggle i").toggleClass(
          "icofont-navigation-menu icofont-close"
        );
      }
      $(".toggle-btn").show();
    }
  });


  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back",
      once: true,
    });
  }
  $(window).on("load", function () {
    aos_init();
  });
})(jQuery);
