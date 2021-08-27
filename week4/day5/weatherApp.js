async function getWeather(){

const city = document.querySelector(".city").value;
const APIkey = "e8c36f215fbebc76a79930f3223f523b";
const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=imperial`);
const jsonweather = await data.json();

const temp = document.createElement("p");
console.log(jsonweather.main.temp);
temp.innerHTML = jsonweather.main.temp;
const tempContainer = document.querySelector(".tempContainer");
    tempContainer.append(temp);
}
const search = document.querySelector(".search");
search.addEventListener("click", () => {
    getWeather()
});