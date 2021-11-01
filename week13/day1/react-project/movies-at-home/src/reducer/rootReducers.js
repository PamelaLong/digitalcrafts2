import { combineReducers } from "redux";
import movieTitle from "./movieTitle";
import moviePoster from "./moviePoster";
import movieYear from "./movieYear";


const rootReducers = combineReducers({
    movieTitle,
    moviePoster,
    movieYear,


}
);

export default rootReducers;

