import { combineReducers } from "redux";
import movieAPI from "./movieAPI";
import cart from "./cart";


const rootReducers = combineReducers({
    cart,
    movieAPI,


}
);

export default rootReducers;



// find where you are putting this or if you need to make another movieAPI.js file
// movieAPI.js
// const myAPIKey = "d032f16a&s=";
// const ombdPage = `http://www.omdbapi.com/?apikey=${myAPIKey}`