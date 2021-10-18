import React from 'react';

// value of an 'X' or an 'O'
const Square = ({onClick, value}) => {

        return (
            <div className="Square">
                
                <div className="row1">
                <button onClick={onClick}>{value}</button>
                <button onClick={onClick}>{value}</button>
                <button onClick={onClick}>{value}</button>
                </div>
                
                <div className="row2">
                <button onClick={onClick}>{value}</button>
                <button onClick={onClick}>{value}</button>
                <button onClick={onClick}>{value}</button>
                </div>
    
                <div className="row3">
                <button onClick={onClick}>{value}</button>
                <button onClick={onClick}>{value}</button>
                <button onClick={onClick}>{value}</button>
                </div>
    
    
    
            </div>
        )
    }


export default Square;
