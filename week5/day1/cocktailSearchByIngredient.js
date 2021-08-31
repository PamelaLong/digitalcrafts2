// search coctail by ingredient name
const theCocktailDB = ("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=");

const input = document.querySelector(".input");
const search = document.querySelector(".search");

// make your function make sense
async function searchSpirits(){
    const userInput = input.value;
    const fetchSpirits = await fetch(theCocktailDB + userInput);
    const jsonSpirits = await fetchSpirits.json();
    input.value = ""

// select a container to hold the spirits and name it
const allSpirits = document.querySelector(".mainSpirits");
allSpirits.innerHTML = ""

for (const Spirits of jsonSpirits.drinks) {
    // make a box for the new element: spirits
    const spiritsBox = document.createElement("div")
    // space for the image of the spirits then URL source them in the image container
    const spiritImage = document.createElement("img");
    spiritImage.src= Spirits.strDrinkThumb
    // space for the name of the spirits then innerHTML them in the paragraph container
    const spiritName = document.createElement("p");
    // spiritName.href: try to make the link for ingrediant list work, replacing 'p' with 'a' thursday night or friday morning
    
    spiritName.innerHTML = Spirits.strDrink
    // add all elements to mainSpirits container

    spiritsBox.append(spiritImage, spiritName);
    allSpirits.append(spiritsBox);

}    
}
search.addEventListener("click", () => searchSpirits())