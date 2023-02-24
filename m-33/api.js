document.getElementById("test").addEventListener("click", function(){ 
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => getPost(json))

});




function getPost(json) { 
  for (post in json) {
     let id= json[post].id;
     let title= json[post].title;
    let body = json[post].body;
    
    const parent =document.getElementById("post")
    const div = document.createElement("div")
    div.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">

      <h2 class="card-title">${id}</h2>
      <h2 class="card-title">${title}</h2>
      <p>${body}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">comment</button>
      </div>
    </div>
  </div>`
    
    parent.appendChild(div)
  }
};