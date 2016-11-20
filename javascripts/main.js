$(document).ready(function() {
  $('.button').click(function(e) {
    e.preventDefault();
    $('.button').html("<img src='loading.gif'/>");
    $.get('http://talk-to-obama.herokuapp.com/chat')
      .then(function(d){
        $('.button').text("SAUCE ME");
        $('.talk').text('"' + d.content + '"');
      })
  });
});
