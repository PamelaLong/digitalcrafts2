import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../actions-types/counter-types";


export const ConsoleLogVariable = (name) => {
    console.log(name);
};

export const IncrementCounter = (dispatch, message)=> {
    dispatch({type: INCREMENT_COUNTER })
    console.log(message)
}

export const DecrementCounter = (dispatch, message)=> {
    dispatch({type: DECREMENT_COUNTER })
    console.log(message)
}