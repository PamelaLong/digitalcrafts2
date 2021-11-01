import React from 'react'
import { useDispatch } from 'react-redux';

import {
    ADD_MOVIE,
    DELETE_MOVIE,
    READ_MOVIE,
    UPDATE_MOVIE
    } from "./Cart-types"


export default function ButtonTypes() {
    const dispatch = useDispatch();
    
    return (
        <div className="buttons">
            <button onClick= {() => ADD_MOVIE(dispatch, "added to cart")}>Add to Cart</button>
            <button onClick= {() => DELETE_MOVIE(dispatch, "deleted from cart")}>Delete from Cart</button>
            <button onClick= {() => READ_MOVIE(dispatch, "in your cart")}>In Your Cart</button>
            <button onClick= {() => UPDATE_MOVIE(dispatch, "refreshed cart")}>Refreshed Your Cart</button>
            
        </div>
    )
}


