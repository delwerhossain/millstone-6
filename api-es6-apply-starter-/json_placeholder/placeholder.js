// console.log("yeah babe its working");

const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayData(data.slice(0, 3));
    });
};

const displayData = (data) => {
  // console.log(data);
  const detailsContainer = document.getElementById("details-container");
  data.forEach((element) => {
    const { title, id } = element;
    const div = document.createElement("div");
    div.innerHTML = `
          <h1 class="text-3xl">Title: ${title}</h1>
          <p>Details: ${id}</p>
        `;
    detailsContainer.appendChild(div);
  });
};

loadData();
console.log("first");
