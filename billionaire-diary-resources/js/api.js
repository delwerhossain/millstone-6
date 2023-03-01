const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'forbes-worlds-billionaires-list.p.rapidapi.com'
    }
};
const mainProsscer = async(options) => {
    const url = `https://forbes-worlds-billionaires-list.p.rapidapi.com/billionaires/2021?page=0&size=100&name=elon&country=usa&countryOfCitizenship=united%20states`;
  
    try {
      const res = await fetch(url , options);
      const datas = await res.json();
      getData(datas.meals); 
    } catch (error) {
      alert("hello", error); 
    }
  };
mainProsscer(options);
  
	
    

const notFound = (data) => {
  if (data.length === 0) {
    document.getElementById("not-found").classList.remove("hidden");
  } else {
    document.getElementById("not-found").classList.add("hidden");
  }
};
const loader = (call) => {
  if (call) {
    document.getElementById("loader").classList.remove("hidden");
  } else {
    document.getElementById("loader").classList.add("hidden");
  }
};

const getData = (datas) => {
  console.log(datas);

//   const parent = document.getElementById("main-contain");
//   list.innerHTML = "";
//   datas.forEach((data) => {
//     // console.log(data);

//     // const { idMeal, strMeal, strMealThumb, strInstructions } = data;
//     const div = document.createElement("div");
//     div.innerHTML = `
//       <div class="card w-96 bg-base-100 shadow-2xl">
//       <figure><img src="${strMealThumb}" alt="Shoes" /></figure>
//       <div class="card-body">
//         <h2 class="card-title">
//         ${strMeal}
//           <div class="badge badge-secondary">NEW</div>
//         </h2>
//         <p>${strInstructions.slice(0, 128)}....</p>
//         <div class="card-actions justify-end">
//           <div class="badge badge-outline">Fashion</div> 
//           <div class="badge() badge-outline">Products</div>
  
//         </div>
//       </div>
//     </div>`;
//     parent.appendChild(div);
//   });
};
