import React from 'react'
// import "./SignUpStyles.css";
import { useDispatch } from 'react-redux';


export default function SignUpForm() {
    const dispatch = useDispatch();
    const user  = useSelector((state) => state)

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
            <button onClick= {() => dispatch({type:"INCREMENT_COUNTER"})}>Increment Counter</button>
            <button onClick= {() => dispatch({type:"DECREMENT_COUNTER"})}>Decrement Counter</button>
            </div>
            </form>
        </div>
    
    )
    )
};
