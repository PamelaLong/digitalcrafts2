const initialState = {
    mustang: "1967 Mustang Boss 302",
    fordGT: "2021 Ford GT",
    bugatti: "2021 Bugatti Chiron",
    kavasaki: "ZRX1200",
};


const rootReducer = (state=initialState, action) => {

    switch(action.type) {
        // compare value to list of criteria
        // those criteria are called cases
        case "GET_BUGATTI":
            return state.bugatti;
        case "GET_FORDGT":
            return state.fordGT;
        case "GET_MUSTANG":
            return state.mustang;
        // case "GET_KAVASAKI":
        //     return state.kawasaki;
            case "Change_KAVASAKI":
            return { ...state, kawasaki: "Ninja 250"};


        default:
            return state
    }
}

export default rootReducer;