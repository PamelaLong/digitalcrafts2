const initialState = {
    Title: "",
    

}

function movieTitle(state = initialState, action) {
    switch (action.type) {
        case "movieTitle":
            return {
                Title: "",
            };
            
        default:
            return state;
    }
}

export default movieTitle;