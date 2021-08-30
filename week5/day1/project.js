// search coctail by ingredient name
const theCocktailDB = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="

const input = document.querySelector(".input");
const search = document.querySelector(".search");

// make your function make sense
async function searchMovies(){
    const userInput = input.value;
    const fetchSpirits = await fetch(theCocktailDB + `${userInput}`);
    const jsonSpirits = await fetchSpirits.json();
    console.log(jsonSpirits);
}
for (const Spirits of jsonSpirits) {
    // select a container to hold the spirits
    
}