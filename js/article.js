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

(function() {
  $(document).on('ready', function() {
    var $content = $('.section--content'),
        contentTop = $content.offset().top,
        contentLength = $content.outerHeight(),
        progressBar = $('.progress'),
        halfWindow = $(window).height() / 2;

    $('.tldr__picker input').on('change', function() {
      setTimeout(function(){
        contentLength = $content.outerHeight();
      }, 100);
    });

    $(document).on('scroll', function(){
      var offsetTop = $(window).scrollTop() - contentTop + halfWindow;
      var percentageViewed = (offsetTop / contentLength) * 100;
      barWidth = percentageViewed > 100 ? 100 : percentageViewed;

      progressBar.css('width', barWidth + '%');
    });
  });
})();

(function() {
  $(document).on('ready', function() {
    var $tldr = $('.tldr');
    if ($('.tldr').length > 0) {
      console.log('asdfadsf');
      var $picker = $('.tldr__picker');
      $picker.show();

      $picker.find('input').on('change', function() {
        $tldr.toggle();
      });
    }
  });
})();
