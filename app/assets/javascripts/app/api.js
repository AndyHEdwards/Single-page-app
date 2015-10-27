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
