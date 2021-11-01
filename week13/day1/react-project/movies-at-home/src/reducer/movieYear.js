const initialState = {
    Year: "",
    

}

function movieYear(state = initialState, action) {
    switch (action.type) {
        case "movieYear":
            return {
                Year: "",
            };
            
        default:
            return state;
    }
}

export default movieYear;