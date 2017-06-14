document.addEventListener('DOMContentLoaded', function() {

  var NavY = $('#nav').offset().top;


  var movingUp = function() {
    var scrollY = $(window).scrollTop();
    if (scrollY > 300) {
      $('#move_up').stop(true).fadeIn('fast');
  } else {
      $('#move_up').stop(true).fadeOut('fast');
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
  $('#link_7').click(function() { $.scrollTo($('#header_7'), 1000);});
  $('#link_8').click(function() { $.scrollTo($('#header_8'), 1000);});
  $('#link_9').click(function() { $.scrollTo($('#header_9'), 1000);});
  $('#link_10').click(function() { $.scrollTo($('#header_10'), 1000);});
  $('#link_11').click(function() { $.scrollTo($('#header_11'), 1000);});
  $('#link_12').click(function() { $.scrollTo($('#header_12'), 1000);});
  $('#link_13').click(function() { $.scrollTo($('#header_13'), 1000);});

});
