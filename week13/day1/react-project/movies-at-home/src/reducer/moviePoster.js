import { ADD_MOVIE } from "../redux/action-types/Cart-types";


const initialState = {
    Poster: "",    
};

const moviePoster = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            const originalState = state;

            const newState = [...originalState, {name: "moviePoster" }];
            return newState;
                

            
        default:
            return state;
    };
};
export default moviePoster;