const myAPIKey = "d032f16a";
const ombdPage = "http://www.omdbapi.com/?apikey=[d032f16a]";

const container = document.querySelector(".movieContainer");
const search = document.querySelector(".search movies");

async function searchMovies(){
    const movieContainer = document.querySelector(".input");
    const fetchMovies = await fetch(ombdPage, {input});
    const json = await fetch(fetchMovies.json);
    const movieposts = document.createElement(".img");

console.log(ombdMovies.search);
}
