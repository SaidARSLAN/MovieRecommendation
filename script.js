const card = document.querySelector(".card")
const button = document.querySelector("#send").addEventListener("click",sendRequest)
function sendRequest() {
    const input = document.querySelector("#textarea").value
    const api_key = "k_ag08uo8p";
    const request = new XMLHttpRequest();
    request.open("GET","https://imdb-api.com/en/API/Top250Movies/"+api_key);
    request.send();
    request.addEventListener("load",function() {
        const data = JSON.parse(request.responseText);
        for (let i of data.items) {
            if (i.title===input || i.rank === input){
                console.log(i)
                const info = `
                <img src="${i.image}" width="25%" height="400px">
                <div class="movie-info">
                <h1>${i.title}</h1>
                <h2>${i.crew}</h2>
                <h2>Rank: ${i.rank}</h2>
                <h2>Year: ${i.year}</h2>
                </div>
        `
        card.innerHTML = info
        card.style.display="flex";
            }

        }
        
    })
}