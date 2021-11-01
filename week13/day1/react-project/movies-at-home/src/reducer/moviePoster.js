const initialState = {
    Poster: "",
    

}

function moviePoster(state = initialState, action) {
    switch (action.type) {
        case "moviePoster":
            return {
                Poster: "",
                
            };
            
        default:
            return state;
    }
}

export default moviePoster;