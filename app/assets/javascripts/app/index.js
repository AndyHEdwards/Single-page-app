$(function(){
  controller = new Controller()
  controller.getPosts()
  view = new View()

  $('#createPost').click(function(e){
    // $('#posts').hide()
    view.displayForm()
  })

  $('#deletePosts').click(function(e){
    controller.deletePosts()
    console.log("hi")
    $('#posts').empty()
  })
})

