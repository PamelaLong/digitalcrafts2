import React, { useState } from 'react';
import ListOfNames from './ListOfNames';



export default function ExampleOne(){
    const [UserName, setUserName] = useState([])
    const [ListOfNames, setListOfNames] = useState([])
    
    return(
        <div>
            <h1>Enter your name:</h1>
            
            <input type="text" onChange={(e) => setUserName({ ...ListOfNames, firstName: e.target.value})} name= "firstName" placeholder="First Name"/>
            <input type="text" onChange={(e) => setUserName({ ...ListOfNames, lastName: e.target.value})} name= "lastName" placeholder="Last Name"/>

            <button onClick={() => setListOfNames("ListOfNames")}>Submit</button>
            
            <ListOfNames list={UserName} />
        </div>
    );
};
