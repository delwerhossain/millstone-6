document.getElementById("btn-refrash").addEventListener("click", () => {
  fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((data) => random(data));
});

function random(data) {
  document.getElementById("random").innerText = data.quote;
}

////////////////////////////////////////////////////////////////
// random cards
////////////////////////////////////////////////////////////////

document.getElementById("btn-card-refrash").addEventListener("click", () => {
  fetch("https://randomuser.me/api/?gender=male")
    .then((response) => response.json())
    .then((data) => randomCard(data));
});

function randomCard(data) {
  let title = data.results[0].name.title;
  let firstN = data.results[0].name.first;
  let lastN = data.results[0].name.last;
  let picture = data.results[0].picture.large;
  let email = data.results[0].email;

  document.getElementById("card-img").src = picture;
  document.getElementById("title").innerText = title;
  document.getElementById("first").innerText = firstN;
  document.getElementById("last").innerText = lastN;
  document.getElementById("email").innerText = email;

  //   document.getElementById("test-card").innerText = picture;

  //   const parent = document.getElementById("profile-card");
  //   const div = document.createElement("div");
  //   div.innerHTML = `
  //     <div class="card-body">
  //     <div class="avatar">
  //               <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
  //                 <img id="card-img" src="${picture}" />
  //               </div>
  //             </div>
  //       <h2 id="card-name" class="card-title">${title} ${firstN} ${lastN}</h2>
  //   </div>`;

  //   parent.appendChild(div);
}
