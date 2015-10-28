$(function(){
  controller = new Controller()
  controller.displayPosts()
  view = new View()

  $('#createPost').click(function(){
    // $('#posts').hide()
    view.displayPostForm()
  })

  $('#deletePosts').click(function(){
    controller.deletePosts()
  })

  $('#createUser').click(function(){
    view.displayUserForm()
  })

  $('#createSession').click(function(){
    view.displaySessionForm()
  })
})

