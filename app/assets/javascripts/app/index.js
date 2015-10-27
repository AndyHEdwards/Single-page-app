$(function(){
  controller = new Controller()
  controller.getPosts()
  view = new View()

  $('#createPost').click(function(e){
    $('#posts').hide()
    view.displayForm()
  })
})

