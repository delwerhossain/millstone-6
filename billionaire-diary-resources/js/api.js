const readsAll = (id) => {
  // https://openapi.programming-hero.com/api/news/{news_id}
  // document.getElementById('read-all').innerText = ``;
  // document.getElementById('read-all').innerText = readAll;
  

};


const mainProsscer = async () => {
  const url = `https://openapi.programming-hero.com/api/news/category/01`;

  try {
    const res = await fetch(url);
    const datas = await res.json();
    getData(datas.data);
    // console.log(datas.data);
  } catch (error) {
    console.log("hello", error);
  }
};
mainProsscer();

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

  const parent = document.getElementById("main-contain");
  
  datas.forEach((data) => {
    console.log(data);
    const { name, img ,published_date} = data.author;
    const image_url = data.image_url;
    const {is_trending} = data.others_info;
    const details = `${data.details}`;
    const  detailSlice = details.slice(0, 100);
    // console.log(details);

    const card = document.createElement("div");

    card.innerHTML = `
  
  <article
  class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
>
  <div class="flex justify-between items-center mb-5 text-gray-500">
    <span
      class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
    >
      <svg
        class="mr-1 w-3 h-3"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
        ></path>
      </svg>
      ${is_trending ? 'trending' :'Not trending'}

    </span>
    <span class="text-sm">${published_date}</span>
  </div>

  <div class="text-center">
  <img
  srcset="${image_url} 1x, ${image_url} 2x"
  class="mx-auto w-2/3 h-1/2 max-w-xl rounded-lg"
  alt="image description"
/>
 </div>

  <h2
    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
  >
    <a href="#">How to quickly deploy a static website</a>
  </h2>
  <p id='read-all' class="mb-5 font-light text-gray-500 dark:text-gray-400">${detailSlice}
  </p>
  <div class="flex justify-between items-center">
    <div class="flex items-center space-x-4">
      <img
        class="w-7 h-7 rounded-full"
        src="${img}"
        alt="${name} avatar"
      />
      <span class="font-medium dark:text-white"> ${name} </span>
    </div>
    <a onclick="readsAll('${data._id}')" 
      href="#"
      class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
    >
      Read more
      <svg
        class="ml-2 w-4 h-4"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </a>
  </div>
</article>

  `;
    parent.appendChild(card);

    // console.log(name,img);
  });



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
