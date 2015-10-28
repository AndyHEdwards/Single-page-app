var View = function(){
}

View.prototype.displayPosts = function(data){
  for(var i = 0; i < data.length; i++){
    $('#posts').append("<h2> " + data[i].title + "</h2>")
    $('#posts').append("<p> " + data[i].body + "</p>")
    $('#posts').append("------------------------------------------------------------------------")
  }
}

View.prototype.displayPostForm = function(){
  $('#content').append("<form id='postForm'>Title:<br><input type='text' name='title'><br>Body:<br><input id='formBody' type='text' name='body'><br><br><input type='submit' value='Submit' id='submitPost'></form>")
  $('#postForm').submit(function(){
    var formTitle = $('#postForm input').val()
    var formBody = $('#formBody').val()
    var object = {post: {title: formTitle, body: formBody}}
    controller.createPost(object)
  })
}

View.prototype.displayUserForm = function(){
  $('#content').append("<form id='userForm'>Name:<br><input type='text' name='name'><input type='submit' value='Submit' id='submitPost'></form>")
  $('#userForm').submit(function(){
    var formName = $('#userForm input').val()
    var object = {user: {name: formName}}
    controller.createUser(object)
  })
}

View.prototype.displaySessionForm = function(){
  $('#content').append("<form id='sessionForm'>Name:<br><input type='text' name='name'><input type='submit' value='Login' id='submitPost'></form>")
  $('#sessionForm').submit(function(){
    var userName = $('#sessionForm input').val()
    var object = {name: userName}
    controller.createSession(object)
  })
}
