const loadMemes = () => {
  fetch("https://meme-api.com/gimme/30")
    .then((res) => res.json())
    .then((data) => showMemes(data.memes));
};

const showMemes = (memes) => {
  //   console.log(memes);
  memes.forEach((meme) => {
    console.log(meme);
    const { url } = meme;
    const container = document.getElementById("meme-info");
    const div = document.createElement("div");

    div.innerHTML = `
    <div class="card w-full glass">
    <figure><img class="w-full h-96"src="${url}" alt="car!"/></figure>
  </div>
    
    `;
    container.appendChild(div);
  });
};

loadMemes();
