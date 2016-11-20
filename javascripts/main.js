$(document).ready(function() {
  $('.button').click(function(e) {
    e.preventDefault();
    $('.loading').addClass("show");
    $.get('http://talk-to-obama.herokuapp.com/chat')
      .then(function(d){
        $('.loading').removeClass("show");
        $('.talk').text('"' + d.content + '"');
      })
  });
});
