var Controller = function(){
}

Controller.prototype.getPosts = function(){
  var api = new Api()
  var view = new View()
  api.indexPosts(function(data){
    view.displayPosts(data)
  })
}

