import React from 'react'
// import "./SignUpStyles.css";
import { useDispatch } from 'react-redux';
import { ConsoleLogVariable } from '../actions/SignUpFormActions';
import { useSelector } from 'react-redux';
import { INCREMENT_COUNTER } from '../actions-types/counter-types';
import { DECREMENT_COUNTER } from '../actions-types/counter-types';


export default function SignUpForm() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state)

    return ((
      <div className="signUpForm">
            <form>
            <input onChange={(e) => dispatch({type: "SIGNUPFORM_FIRSTNAME", payload: e.target.value})} type="text" placeholder ="FirstName" />
            <input onChange={(e) => dispatch({type: "SIGNUPFORM_LASTNAME", payload:e.target.value})} type="text" placeholder ="LastName" />
            <input onChange={(e) => dispatch({type: "SIGNUPFORM_EMAIL", payload:e.target.value})} type="text" placeholder ="Email" />
            <input onChange={(e) => dispatch({type: "SIGNUPFORM_PASSWORD", payload:e.target.value})} type="text" placeholder ="Password" />
            <input type="submit" onClick={(e) => creatUserFromLogin(e, user)} />
            {counter}
            <div>
            {/* <button onClick= {() => dispatch({type:"INCREMENT_COUNTER"})}>Increment Counter</button>
            <button onClick= {() => dispatch({type:"DECREMENT_COUNTER"})}>Decrement Counter</button> */}
            
            <button onClick= {() => ConsoleLogVariable(pamela)}>Print to console</button>
            <button onClick= {() => INCREMENT_COUNTER(dispatch, "incremented")}>Increment</button>
            <button onClick= {() => DECREMENT_COUNTER(dispatch, "decremented")}>Decrement</button>
        
            </div>
            </form>
        </div>
    
    )
    )
};
