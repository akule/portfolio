var main = function() {
  var postCount = 0;
  var addpost = function() {
    postCount += 1;
    var post = $('.status-box').val();
    var d1 = new Date();
    var utcDate = d1.toUTCString();
    $('<li class="'+postCount+'">').text(post).prependTo('.posts');
    $('<small class="pull-right">').text(utcDate).prependTo('.'+postCount)
    $('.status-box').val('');
    $('.counter').text('140');
    $('.btn').addClass('disabled');
    savePost(post);
  }

  $('.btn').click(addpost);

  $('.status-box').keypress(function(e) {
    var disabled = $('.btn').hasClass('disabled');
    if(e.which == 13 && !disabled) {
      event.preventDefault();
      addpost();
      $('.status-box').val('');
    } else if (e.which == 13) {
      event.preventDefault();
    }
  });

  $('.status-box').keyup(function() {
    var postLength = $(this).val().length;
    var charactersLeft = 140 - postLength;
    $('.counter').text(charactersLeft);

    if(charactersLeft < 0) {
      $('.btn').addClass('disabled');
    } else if(charactersLeft === 140) {
      $('.btn').addClass('disabled');
    } else {
      $('.btn').removeClass('disabled');
    }
  });

  $('.btn').addClass('disabled');
}
var savePost = function(content){
  $.ajax({
    type: 'POST',
    dataType: 'json',
    url: 'localhost:3000/comments.json'
    data: {comment: {content: content}}
  })
}

$(document).ready(main);