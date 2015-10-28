var Api = function(){

}

Api.prototype.indexPosts = function(callback){
  $.get('http://localhost:3000/api/v1/posts', function(data){
    callback(data)
  })
}

Api.prototype.createPost = function(data){
  $.post('http://localhost:3000/api/v1/posts', data)
}

Api.prototype.deletePosts = function(){
  $.ajax({
    url: 'http://localhost:3000/api/v1/posts',
    type: 'DELETE',
    success: function(result) {
        // Do something with the result
    }
  });
}


Api.prototype.createUser = function(data){
  $.post('http://localhost:3000/api/v1/users', data)
}


Api.prototype.createSession = function(data){
  $.post('http://localhost:3000/sessions', data, function(response){
    var view = new View()
    view.dislayName(response)
  })
}
