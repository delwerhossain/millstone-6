
const mainProsscer = async(search) => {
  const defult = "fish";
  const match = search || defult;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${match}`;

  try {
    const res = await fetch(url);
    const datas = await res.json();
    getData(datas.meals); 
    // const res = await fetch(url);
    // const data = await res.json();
  } catch (error) {
    console.log("hello", error); 
  }
  // fetch(url)
  //   .then((response) => response.json())
  //   .then((datas) => getData(datas.meals));
};
mainProsscer();


const notFound = () => {
  document.getElementById('not-found').classList.remove('hidden');
}
const oFound = () => {
  document.getElementById('not-found').classList.add('hidden');
}


// search function
document.getElementById("input-loader").addEventListener("keyup", () => {
  // ocumednt.getElementById("input-loader").value.innerText = "";
  const search = document.getElementById("input-loader").value;

  mainProsscer(search);

});

const getData = (datas) => {
  // console.log(datas);


  const parent = document.getElementById("list");
  list.innerHTML = "";
  // console.log(datas);
  if ((datas) && (datas.length > 0) && (Array.isArray(datas))) 
    {

      // notFound(false);
      oFound();
      datas.forEach((data) => {
        // notFound(data);df
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
    }
  else {
    notFound();

  }


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
  // console.log(strMeal);
  const defultImg = 'https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg';
  const parent = document.getElementById("modal-preview");
  parent.innerHTML = ``;
  const div = document.createElement("div");
  div.innerHTML = `
  
      <h3 id="modal-id" class="text-lg font-bold">${strMeal}</h3>
      <p class="py-4">${strInstructions.slice(0, 128)}....} </p>
      <div class="avatar">
  <div class="w-24 rounded-full">
    <img src="${strMealThumb ? strMealThumb : defultImg}" />
  </div>
      `;
  parent.appendChild(div);
};
