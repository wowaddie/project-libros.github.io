$(document).ready(function() {
    $("#carouselBanner").swiperight(function() {
      $(this).carousel('prev');
    });
    $("#carouselBanner").swipeleft(function() {
      $(this).carousel('next');
    });
});

$(document).ready(function(){
    $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 100
            }, 900);
            return false;
          }
        }
    });

    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar').addClass('on');
        } else {
            $('.navbar').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar',
        offset: 100
    });

    // Hide nav on click
      $(".navbar-nav li a").click(function (event) {
        // check if window is small enough so dropdown is created
        var toggle = $(".navbar-toggler").is(":visible");
        if (toggle) {
          $(".navbar-collapse").collapse('hide');
        }
      });
});

$(document).ready(function() {
    $('#y-play-video').on('click', function(ev) {
      $(".y-video-thumbnail").hide();
      $(".y-video-embed").show();
      $("#y-video")[0].src += "&autoplay=1";
      ev.preventDefault();
    });
  });