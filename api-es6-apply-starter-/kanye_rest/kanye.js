const loadData = () => {
  fetch(`https://api.kanye.rest`)
    .then((res) => res.json())
    .then((data) => displayData(data));
};

const displayData = (data) => {
  const { quote } = data;
  const container = document.getElementById("details");
  container.innerHTML = "";
  const h1 = document.createElement("h1");
  h1.classList.add("text-4xl", "text-center", "font-bold", "my-5");
  h1.innerText = quote;
  container.appendChild(h1);
};

loadData();
