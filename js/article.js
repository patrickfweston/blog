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

// From: https://css-tricks.com/reading-position-indicator/
(function() {
  $(document).on('ready', function() {
    var winHeight = $(window).height(),
        docHeight = $(document).height(),
        progressBar = $('.progress'),
        max, value, barWidth, percentageViewed;

    /* Set the max scrollable area */
    max = (docHeight - winHeight) / 100;

    $(document).on('scroll', function(){
       value = $(window).scrollTop();
       percentageViewed = value / max;
       barWidth = percentageViewed > 100 ? 100 : percentageViewed;
       progressBar.css('width', barWidth + '%');
    });
  });
})();
