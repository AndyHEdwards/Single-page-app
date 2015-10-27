var Controller = function(){
}

Controller.prototype.getPosts = function(){
  var api = new Api()
  var view = new View()
  api.indexPosts(function(data){
    view.displayPosts(data)
  })
}
// POSTS
Controller.prototype.createPost = function(data){
  var api = new Api()
  var view = new View()
  api.createPost(data)
}

Controller.prototype.deletePosts = function(){
  var api = new Api()
  var view = new View()
  api.deletePosts()
}

// Users
Controller.prototype.createUser = function(data){
  var api = new Api()
  var view = new View()
  api.createUser(data)
}
