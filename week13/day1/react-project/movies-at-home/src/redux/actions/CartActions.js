import { ADD_MOVIE, DELETE_MOVIE, READ_MOVIE, UPDATE_MOVIE } from "../action-types/Cart-types";


// export const ConsoleLogVariable = (name) => {
//     console.log(name);
// };

export const AddMovie = (dispatch, message)=> {
    dispatch({type: ADD_MOVIE })
    console.log(message)
};

export const DeleteMovie = (dispatch, message)=> {
    dispatch({type: DELETE_MOVIE })
    console.log(message)
};

export const ReadMovie = (dispatch, message)=> {
    dispatch({type: READ_MOVIE })
    console.log(message)
};

export const UpdateMovie = (dispatch, message)=> {
    dispatch({type: UPDATE_MOVIE })
    console.log(message)
};