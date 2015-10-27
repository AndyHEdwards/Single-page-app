var View = function(){
}

View.prototype.displayPosts = function(data){
  console.log(data)
  for(var i = 0; i < data.length; i++){
    $('#content').append("<h2> " + data[i].title + "</h2>")
    $('#content').append("<p> " + data[i].body + "</p>")
  }
}
