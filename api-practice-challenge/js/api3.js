const funcFetch = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    getdata(data);
    // const res = await fetch(url);
    // const data = await res.json();
  } catch (error) {
    getdata("hello", error);
  }
};

const notFound = (data) => {
  if (data.length === 0) {
    document.getElementById('not-found').classList.remove('hidden');
  }
  else {
    document.getElementById('not-found').classList.add('hidden');
  }  
}
const loader = (call) => {
  if (call) {
    document.getElementById('loader').classList.remove('hidden');
  }
  else {
    document.getElementById('loader').classList.add('hidden');
  }

  
}


document.getElementById("africa").addEventListener("click", function () {
  // const africa =  () => {
  loader(true);
  url = "https://restcountries.com/v3.1/region/africa";
  funcFetch(url);
});

document.getElementById("americas").addEventListener("click", function () {
  loader(true);
  url = "https://restcountries.com/v3.1/region/americas";
  funcFetch(url);

});

document.getElementById("asia").addEventListener("click", function () {
  loader(true);
  url = "https://restcountries.com/v3.1/region/asia";
  funcFetch(url);
});

document.getElementById("europe").addEventListener("click", function () {
  loader(true);
  url = "https://restcountries.com/v3.1/region/europe";
  funcFetch(url);
});

document.getElementById("oceania").addEventListener("click", function () {
  loader(true);
  url = "https://restcountries.com/v3.1/region/oceania";
  funcFetch(url);
});

const getdata = (datas) => {
  loader(false);
  notFound(datas);
  const parent = document.getElementById("parent");
  parent.innerHTML = "";
  datas.forEach((data) => {
    const { common, official } = data.name;
    const { png } = data.coatOfArms;
    const div = document.createElement("div");
    div.innerHTML = `
    <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex justify-between items-center mb-5 text-gray-500">
                        <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                            <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                            Tutorial
                        </span>
                        <span class="text-sm">14 days ago</span>
                    </div>
                    <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">${common}</a></h2>
                    <p class="mb-5 font-light text-gray-500 dark:text-gray-400">${official}</p>
                    
<img class="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src="${
      png
        ? png
        : "https://thumbs.dreamstime.com/z/faceless-businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-85824471.jpg"
    }" alt="image description"></article>  
    `;
    parent.appendChild(div);

    // getdata(common, official, png);
  });
};


