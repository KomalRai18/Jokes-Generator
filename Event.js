const btn = document.querySelector(".generateJokes");
const jokeE1 = document.querySelector(".joke");
const apiKey = "E2hOpIGk40+bbst5O8lKIQ==SD8BLeh2W236Pkee";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

async function getJoke(){

    jokeE1.innerText = "Rendering...";
    btn.disabled = true;
    btn.innerText = "Loading...";
    const response = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1", options);
    const data = await response.json();
    jokeE1.innerText = data[0].joke;
    btn.disabled = false;
    btn.innerText = "Tell me a joke";
}

btn.addEventListener("click", getJoke);
