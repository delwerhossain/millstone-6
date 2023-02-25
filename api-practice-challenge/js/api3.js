// https://restcountries.com/v3.1/region/asia
document.getElementById("africa").addEventListener("click", function () {
  url = "https://restcountries.com/v3.1/region/africa";
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
});
document.getElementById("americas").addEventListener("click", function () {
  url = "https://restcountries.com/v3.1/region/americas";
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
});
document.getElementById("asia").addEventListener("click", function () {
  url = "https://restcountries.com/v3.1/region/asia";
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
});
document.getElementById("europe").addEventListener("click", function () {
  url = "https://restcountries.com/v3.1/region/europe";
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
});
document.getElementById("oceania").addEventListener("click", function () {
  url = "https://restcountries.com/v3.1/region/oceania";
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
});
