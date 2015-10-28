var View = (function() {
  function View(){
  }

  View.prototype.displayPosts = function(data){
    this.emptyPosts()
    for(i in data) { appendPost(data[i]) }
  }

  View.prototype.displayPostForm = function(){
    appendPostForm() 
    bindPostFormListener()
  }

  View.prototype.displayUserForm = function(){
    $('#content').append("<form id='userForm'>Name:<br><input type='text' name='name'><input type='submit' value='Submit' id='submitPost'></form>")
    $('#userForm').submit(function(e){
      e.preventDefault()
      var formName = $('#userForm input').val()
      var object = {user: {name: formName}}
      controller.createUser(object)
    })
  }

  View.prototype.displaySessionForm = function(){
    $('#content').append("<form id='sessionForm'>Name:<br><input type='text' name='name'><input type='submit' value='Login' id='submitPost'></form>")
    $('#sessionForm').submit(function(e){
      e.preventDefault()
      var userName = $('#sessionForm input').val()
      var object = {name: userName}
      controller.createSession(object)
    })
  }

  View.prototype.emptyPosts = function() {
    $('#posts').empty()
  }

  function appendPost(post) {
    $('#posts').append("<h2> " + post.title + "</h2>")
    $('#posts').append("<p> " + post.body + "</p>")
    $('#posts').append("------------------------------------------------------------------------")
  }

  function appendPostForm() {
    $('#content').append("<form id='postForm'>Title:<br><input type='text' name='title'><br>Body:<br><input id='formBody' type='text' name='body'><br><br><input type='submit' value='Submit' id='submitPost'></form>")
  }

  function bindPostFormListener() {
    $('#postForm').submit(function(e){
      e.preventDefault()
      var formTitle = $('#postForm input').val()
      var formBody = $('#formBody').val()

      controller.createPost({post: {title: formTitle, body: formBody}})
    })
  }
  return View
})()
