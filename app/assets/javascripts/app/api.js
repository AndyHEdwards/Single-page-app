var Api = function(){

}

Api.prototype.index = function(){
  $.get('http://localhost:3000/api/v1/posts', function(data){
    console.log(data)
  })
}
