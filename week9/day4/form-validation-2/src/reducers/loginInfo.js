const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userData: {},
};

const loginInfo = (state= initialState, action) => {
    switch(action.type){
        case "FIRST_NAME":
            return {...state, firstName: action.payload}
        
        case "LAST_NAME":
            return {...state, lastName: action.payload}
        
        case "EMAIL":
            return {...state, email: action.payload}
        
        case "PASSWORD":
            return {...state, password: action.payload}

        case "GET_USER":
            return {...state, userData: action.payload} 
        
        default:
            return state;
    }



};
export default loginInfo;