import { combineReducers } from "redux";
import userData from "./userData";
import graphData from "./graphData";
import loginInfo from "./loginInfo";



const rootReducer = combineReducers({
    userData,
    graphData,
    loginInfo,
})


export default rootReducer;