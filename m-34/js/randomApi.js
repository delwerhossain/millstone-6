document.getElementById('btn-refrash').addEventListener('click', () => {
    fetch('https://api.kanye.rest')
    .then(response => response.json())
    .then(data => random(data))
});
    
function random(data) {
    document.getElementById('random').innerText = data.quote;
}