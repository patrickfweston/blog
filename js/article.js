(function() {
  $(document).ready(function() {
    $(window).on("scroll", function() {
      var fromTop = $("body").scrollTop();
      var $unstuckNav = $('.section--meta.unstuck');
      var unstuckFromTop = $unstuckNav.offset().top;
      $('body').toggleClass("down", (fromTop > unstuckFromTop + $unstuckNav.height()));
    });
  });
})();
