var Controller = function(){
  this.api = new Api()
  this.view = new View()
}

Controller.prototype.displayPosts = function(){
  this.api.indexPosts(function(data){
    this.view.displayPosts(data)
  }.bind(this))
}
// POSTS
Controller.prototype.createPost = function(data){
  this.api.createPost(data)
  this.displayPosts()
}

Controller.prototype.deletePosts = function(){
  this.api.deletePosts()
  this.view.emptyPosts()
}

Controller.prototype.createUser = function(data){
  this.api.createUser(data)
}

Controller.prototype.createSession = function(data){
  this.api.createSession(data)
}
