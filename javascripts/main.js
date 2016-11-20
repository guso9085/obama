$(document).ready(function() {
  $('.button').click(function(e) {
    e.preventDefault();
    $.get('https://crossorigin.me/http://talk-to-obama.herokuapp.com/chat')
      .then(function(d){
        $('.talk').text('"'+ d.content + '"');
      })
  });
});
