$(document).ready(function() {
  $('.button').click(function(e) {
    e.preventDefault();
    $('.button').html("<img src='loading.gif'/>");
    $.get('http://talk-to-obama.herokuapp.com/chat')
      .then(function(d){
        $('.button').html("<h1 id="buttonT"> SAUCE ME </h1>");
        $('.talk').text('"' + d.content + '"');
      })
  });
});
