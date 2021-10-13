import { FILL_INFO,
INCREMENT_COUNTER,
RESET
 } from "../actions-types/newsarticles-types";

const initialState = []

const NewsArticles = (state=initialState, action) => {
    switch(action.type){
        case FILL_INFO:
            const originalState = state;

            const newState = [...originalState, {name: "news article" }];
            return newState;
        case INCREMENT_COUNTER:
            return state + 1;
        case RESET:

        default:
            return state;
    }
}

export default NewsArticles;