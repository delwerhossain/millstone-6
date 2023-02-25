const dataFromApi = () => {
  fetch("https://randomuser.me/api/?results=25&gender=female")
    .then((res) => res.json())
    .then((data) => displayRandomGirl(data.results.slice(0, 6)));
};

const displayRandomGirl = (randomGirl) => {
  const container = document.getElementById("girls-details");
  container.innerHTML = "";
  randomGirl.forEach((singleGirl) => {
    console.log(singleGirl);
    container.classList.add("lg:px-20", "my-8");
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
    <figure><img src="${singleGirl.picture.large}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">${singleGirl.name.first} ${singleGirl.name.last}</h2>
      <p>${singleGirl.email}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>

    `;
    container.appendChild(div);
  });
};

const loadAllApus = () => {
  fetch("https://randomuser.me/api/?results=25&gender=female")
    .then((res) => res.json())
    .then((data) => displayRandomGirl(data.results));
};

dataFromApi();
