document.getElementById("test").addEventListener("click", function(){ 
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => getPost(json))

});




function getPost(json) { 
  for (post in json) {
     let title= json[post].title;

  }
};