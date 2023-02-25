const searchPlayer = (id) => {
  document.getElementById("spinner").classList.remove("d-none");
  document.getElementById("male").classList.add("d-none");
  document.getElementById("female").classList.add("d-none");
  document.getElementById("player-details").innerHTML = "";

  const searchValue = document.getElementById("search-value").value;

  const chooseValue = id || searchValue;

  //   console.log(searchValue);

  const URl = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${chooseValue}`;

  fetch(URl)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("spinner").classList.add("d-none");
      document.getElementById("search-value").value = "";
      showPlayer(data.player);
    });
};

const showPlayer = (data) => {
  //   console.log(data);
  const container = document.getElementById("player-info");
  container.innerHTML = "";
  data &&
    data.forEach((player) => {
      console.log(player);
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
    <div class="card w-auto h-100">
    <img class="w-100 h-75" src="${
      player.strThumb
        ? player.strThumb
        : "https://picsum.photos/500/300?random=4"
    }"  alt="...">
    <div class="card-body">
      <h3 class="card-title">${player.strPlayer}</h3>
      <h5 class="card-title">${player.strNationality}</h5>
      <p class="card-text">${
        player.strDescriptionEN
          ? player.strDescriptionEN.slice(0, 100) + "..."
          : "Not Available"
      }</p>
      <button onClick="showplayerDetails('${
        player.idPlayer
      }')" type="button" class="btn btn-outline-danger">Details</button>
        <button type="button" class="btn btn-outline-warning">Delete</button>
    </div>
  </div>
    `;
      container.appendChild(div);
    });
};

const showplayerDetails = (id) => {
  //   console.log(id);
  const URl = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`;
  fetch(URl)
    .then((res) => res.json())
    .then((data) => showPlayerDetails(data.players[0]))
    .catch((err) => {
      console.log(err.message);
    });
};

const detsilsContainer = document.getElementById("player-details");
const showPlayerDetails = (details) => {
  if (details.strGender == "Male") {
    document.getElementById("male").classList.remove("d-none");
  } else {
    document.getElementById("female").classList.remove("d-none");
  }
  detsilsContainer.innerHTML = "";
  //   console.log(details);
  const div = document.createElement("div");
  div.classList.add("mt-4");
  div.innerHTML = `
    
  <div class="card mb-6" >
  <div class="row g-0">
    <div class="col-md-6">
      <img src="${details.strThumb}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title">${details.strPlayer}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>


  `;
  detsilsContainer.appendChild(div);
};
// searchPlayer("alex");
searchPlayer("messi");
