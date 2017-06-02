$(function() {

  var NavY = $('#nav').offset().top;


  var stickyNav = function() {
    var scrollY = $(window).scrollTop();
    if (scrollY > NavY) {
      $('#nav').addClass('sticky');
      $('#move_up').fadeIn();
    } else {
      $('#nav').removeClass('sticky');
      $('#move_up').fadeOut();
    }
  };

  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  });

  $.scrollTo(0);

  $('#scroll_up').click(function() {
     $.scrollTo($('body'), 1000);
   });

  $('#link_1').click(function() { $.scrollTo($('#header_1'), 1000);});
  $('#link_2').click(function() { $.scrollTo($('#header_2'), 1000);});
  $('#link_3').click(function() { $.scrollTo($('#header_3'), 1000);});
  $('#link_4').click(function() { $.scrollTo($('#header_4'), 1000);});
  $('#link_5').click(function() { $.scrollTo($('#header_5'), 1000);});
  $('#link_6').click(function() { $.scrollTo($('#header_6'), 1000);});

});
