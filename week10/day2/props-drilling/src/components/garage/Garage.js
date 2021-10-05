import React from 'react'
import Motorcycles from './Motorcycles'
import Cars from './Cars'
import "../../App.css";

export default function Garage(props) {
    return (
        <div className="box">
            <h1>Garage</h1>
            <Cars mustang={props.mustang}/>
            <Motorcycles />
        </div>
    )
}
