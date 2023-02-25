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
}

////////////////////////////////////////////////////////////////
// Food Api
////////////////////////////////////////////////////////////////

//

document.getElementById("loader").addEventListener("keyup", () => {
  const search = document.getElementById("loader").value; 
  const defult = 'fish'; 
  const match = search || defult;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${match}`;
  fetch(url)
    .then((response) => response.json())
    .then((datas) => getData(datas.meals));
});

const getData = (datas) => {
  // console.log(datas);

  const parent = document.getElementById("list");
  list.innerHTML = "";
  datas.forEach(data => {
    // console.log(data);

    const { idMeal, strMeal, strMealThumb, strInstructions } = data
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-2xl">
    <figure><img src="${strMealThumb}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">
      ${strMeal}
        <div class="badge badge-secondary">NEW</div>
      </h2>
      <p>${strInstructions.slice(0,128)}....</p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">Fashion</div> 
        <div class="badge() badge-outline">Products</div>

      </div>
    </div>
  </div>`;
    parent.appendChild(div);
  })

};
