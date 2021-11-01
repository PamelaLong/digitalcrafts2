import { DELETE_MOVIE } from "../redux/action-types/Cart-types";
import { UPDATE_MOVIE } from "../redux/action-types/Cart-types";

const initialState = [];

const Cart = (state=initialState, action) => {
    switch(action.type){
        case DELETE_MOVIE:
            const originalState = state;

            const newState = [...originalState, {name: "delete movie"}];
            return newState;
        
        case UPDATE_MOVIE:
                const originalState = state;
    
                const newState = [...originalState, {name: "update movie"}];
                return newState;    

        default:
            return state;


        }
}
export default Cart;