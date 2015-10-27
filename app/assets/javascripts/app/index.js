$(function(){
  controller = new Controller()
  controller.getPosts()
  view = new View()

  $('#createPost').click(function(){
    // $('#posts').hide()
    view.displayPostForm()
  })

  $('#deletePosts').click(function(){
    controller.deletePosts()
    $('#posts').empty()
  })

  $('#createUser').click(function(){
    view.displayUserForm()
  })
})

