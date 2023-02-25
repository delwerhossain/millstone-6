// console.log("touring");

// const getALLData = () => {
//   fetch("https://restcountries.com/v3.1/all")
//     .then((res) => res.json())
//     .then((data) => showData(data));
// };

const loadAllData = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  showData(data);
};

const showData = (data) => {
  const container = document.getElementById("country-info");

  data.slice(50, 71).forEach((country) => {
    console.log(country.currencies);
    // console.log(Object.keys(country.currencies)[0]);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card w-full shadow-2xl">
    <figure><img class="w-full h-40" src="${
      country.flags.png
    }" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">
        ${country.name.common}
        <div class="badge badge-secondary">${country.cca2}</div>
      </h2>
      <p>Capital: ${country?.capital ? country?.capital[0] : "Not Found"} </p>
      <p>Population: ${country.population}</p>
      <p>Currency: ${
        country.currencies ? Object.keys(country.currencies)[0] : "Not Found"
      }</p>
      <div class="card-actions justify-end">
      <label onClick="getDetailsData('${
        country.cca2
      }')" for="my-modal" class="btn">Details</label>
    </div>
    </div>
  </div>
    
    `;
    container.appendChild(div);
  });
};

const getDetailsData = (id) => {
  //   console.log("called", id);

  const URL = `https://restcountries.com/v3.1/alpha/${id}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showSingleData(data[0]));
};

const showSingleData = (singleCountryData) => {
  const container = document.getElementById("modal-info");
  const div = document.createElement("div");
  div.classList.add("modal");
  div.innerHTML = `
  <div class="modal-box">
  <img class="w-4/6 mx-auto" src="${singleCountryData.flags.png}" alt="">
  <h3 class="font-bold text-lg mt-4">
    Name : ${singleCountryData.name.common}
  </h3>
  <p class="py-2">
   Region:  ${singleCountryData.region}
  </p>
  <p class="py-2">
   Region:  ${singleCountryData.population}
  </p>
  <p class="py-2">
   Language:  ${singleCountryData.population}
  </p>
  <a class="py-2" href="${singleCountryData.maps.googleMaps}">
   Location  
  </a>
  <div class="modal-action">
    <label for="my-modal" class="btn">Close</label>
  </div>
</div>
  `;
  container.appendChild(div);
};
// getALLData();
loadAllData();
