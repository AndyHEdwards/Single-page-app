$(function(){
  var api = new Api()
  var posts = api.index()
  $('#content').html("spaghetti")
})
