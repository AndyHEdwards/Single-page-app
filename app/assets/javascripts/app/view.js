var View = function(){
}

View.prototype.displayPosts = function(data){
  for(var i = 0; i < data.length; i++){
    $('#posts').append("<h2> " + data[i].title + "</h2>")
    $('#posts').append("<p> " + data[i].body + "</p>")
    $('#posts').append("------------------------------------------------------------------------")
  }
}

View.prototype.displayForm = function(){
  $('#content').append("<form id='postForm'>Title:<br><input type='text' name='title'><br>Body:<br><input id='formBody' type='text' name='body'><br><br><input type='submit' value='Submit' id='submitPost'></form>")
  $('#postForm').submit(function(){
    var formTitle = $('#postForm input').val()
    var formBody = $('#formBody').val()
    var object = {title: formTitle, body: formBody}
    controller.createPost(object)
  })
}

