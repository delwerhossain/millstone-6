// api main function
const mainProsscer = (search) => {
  const defult = "fish";
  const match = search || defult;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${match}`;
  fetch(url)
    .then((response) => response.json())
    .then((datas) => getData(datas.meals));
};
mainProsscer();

// search function
document.getElementById("loader").addEventListener("keyup", () => {
  const search = document.getElementById("loader").value;

  mainProsscer(search);
});

const getData = (datas) => {
  // console.log(datas);

  const parent = document.getElementById("list");
  list.innerHTML = "";
  datas.forEach((data) => {
    const { idMeal, strMeal, strMealThumb, strInstructions } = data;
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card w-96 bg-base-100 shadow-2xl">
      <figure><img src="${strMealThumb}" alt="Shoes" /></figure>
      <div class="card-body">
      <h2 class="card-title">
      ${strMeal}
      <div class="badge badge-secondary">NEW</div>
      </h2>
      <p>${strInstructions.slice(0, 128)}....</p>
      <label onClick="modalView(${idMeal})"  for="my-modal-4" class="btn" >Details</label>
      <div class="card-actions justify-end">

      <div class="badge badge-outline">Fashion</div> 
      
      </div>
      </div>
      </div>`;
    parent.appendChild(div);
  });
};

const modalView = (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  // console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((datas) => getModalData(datas.meals));
};
// modalView(52772);

const getModalData = (data) => {
  const { strMeal, strInstructions, strMealThumb } = data[0];
  console.log(strMeal);
  const parent = document.getElementById("modal-preview");
  parent.innerHTML = ``;
  const div = document.createElement("div");
  div.innerHTML = `
  
      <h3 id="modal-id" class="text-lg font-bold">${strMeal}</h3>
      <p class="py-4">${strInstructions.slice(0, 128)}....} </p>
      <div class="avatar">
  <div class="w-24 rounded-full">
    <img src="${strMealThumb ? strMealThumb :}" />
  </div>
      `;
  parent.appendChild(div);
};

// const getDetailsData = (id) => {
//     //   console.log("called", id);

//     const URL = `https://restcountries.com/v3.1/alpha/${id}`;
//     fetch(URL)
//       .then((res) => res.json())
//       .then((data) => showSingleData(data[0]));
//   };

//   const showSingleData = (singleCountryData) => {
//     const container = document.getElementById("modal-info");
//     const div = document.createElement("div");
//     div.classList.add("modal");
//     div.innerHTML = `
//     <div class="modal-box">
//     <img class="w-4/6 mx-auto" src="${singleCountryData.flags.png}" alt="">
//     <h3 class="font-bold text-lg mt-4">
//       Name : ${singleCountryData.name.common}
//     </h3>
//     <p class="py-2">
//      Region:  ${singleCountryData.region}
//     </p>
//     <p class="py-2">
//      Region:  ${singleCountryData.population}
//     </p>
//     <p class="py-2">
//      Language:  ${singleCountryData.population}
//     </p>
//     <a class="py-2" href="${singleCountryData.maps.googleMaps}">
//      Location
//     </a>
//     <div class="modal-action">
//       <label for="my-modal" class="btn">Close</label>
//     </div>
//   </div>
//     `;
//     container.appendChild(div);
//   };
//   // getALLData();
//   loadAllData();
