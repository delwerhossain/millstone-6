// const loadAllShoe = () => {
//   fetch(
//     "https://raw.githubusercontent.com/rokib97/json-api/main/public/data.json"
//   )
//     .then((res) => res.json())
//     .then((data) => showData(data));
// };
let dataSet;
const loadLocalData = () => {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      dataSet = data;
      showData(data);
    });
};

function showData(data) {
  //   console.log(data);
  const container = document.getElementById("shoes-info");
  data.forEach((value) => {
    // console.log(value);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card w-full bg-base-100 shadow-2xl">
    <figure><img class="w-full h-52" src="${value.pairImage}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">
        Name: ${value.name}
        <div class="badge badge-secondary">NEW</div>
      </h2>
      <h2 class="card-title">
        Color: ${value.color}
        <div class="badge badge-secondary">NEW</div>
      </h2>
      <p>Price: ${value.price}</p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">Fashion</div> 
        <div class="badge badge-outline">Products</div>
      </div>
      <div class="card-actions justify-end mt-2">
      <button onClick="loadSingleData('${value.id}')"  class="btn btn-primary">Details</button>
    </div>
    </div>
  </div>
    `;
    container.appendChild(div);
  });
}

const loadSingleData = (id) => {
  const clickedData = dataSet.find((data) => data.id === id);
  //   console.log(clickedData);
  const container = document.getElementById("data-details");
  container.innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="card w-[75%] mx-auto lg:card-side bg-base-100 shadow-2xl">
  <figure><img class="w-full h-96" src="${clickedData.sideImage}" alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title">${clickedData.name}</h2>
    <p>${clickedData.price}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Listen</button>
    </div>
  </div>
</div>  

  `;
  container.appendChild(div);
};

// loadAllShoe();
loadLocalData();
