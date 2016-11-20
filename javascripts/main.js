$(document).ready(function() {
  $('.button').click(function(e) {
    e.preventDefault();
    $.get('http://talk-to-obama.herokuapp.com/chat')
      .then(function(d){
        $('.talk').text(d);
      })
  });
});
