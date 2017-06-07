document.addEventListener('DOMContentLoaded', function() {

  var NavY = $('#nav').offset().top;


  var movingUp = function() {
    var scrollY = $(window).scrollTop();
    if (scrollY > 300) {
      $('#move_up').stop(true).fadeIn(500);
  } else {
      $('#move_up').stop(true).fadeOut(800);
  }};

    $('#move_up').click(function() {
     $.scrollTo($('body'), 1000);
     return false;
   });


  movingUp();

  $(window).scroll(function() {
    console.log('123');
    movingUp();
  });

  $.scrollTo(0);


  $('#link_1').click(function() { $.scrollTo($('#header_1'), 1000);});
  $('#link_2').click(function() { $.scrollTo($('#header_2'), 1000);});
  $('#link_3').click(function() { $.scrollTo($('#header_3'), 1000);});
  $('#link_4').click(function() { $.scrollTo($('#header_4'), 1000);});
  $('#link_5').click(function() { $.scrollTo($('#header_5'), 1000);});
  $('#link_6').click(function() { $.scrollTo($('#header_6'), 1000);});

});
