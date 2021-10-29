const initialState = {
    Poster: "",
    Title: "",
    Year: "",
    

}

function movieTitle(state = initialState, action) {
    switch (action.type) {
        case "movieTitle":
            return {
                Poster: "",
                Title: "",
                Year: "",
            };
            
        default:
            return state;
    }
}

export default movieTitle;