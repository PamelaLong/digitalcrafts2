import React, { } from 'react'
import {useState} from "react";



function Signup(props) {
    const {SignupItem} = props
    const [setSignupItem] = useState({});

    return(
        <div>
            <input type="text" onChange={(e) => setSignupItem({ ...SignupItem, firstName: e.target.value})} name="firstName" placeholder="First Name" />
            <input type="text" onChange={(e) => setSignupItem({ ...SignupItem, lastName: e.target.value})} name="lastName" placeholder="Last Name" />
            <input type="date" onChange={(e) => setSignupItem({ ...SignupItem, DOB: e.target.value})} name="DOB" placeholder="Date of Birth" />
            <input type="text" onChange={(e) => setSignupItem({ ...SignupItem, address: e.target.value})} name="address" placeholder="Address" />
            <input type="text" onChange={(e) => setSignupItem({ ...SignupItem, city: e.target.value})} name="city" placeholder="City" />
            <input type="text" onChange={(e) => setSignupItem({ ...SignupItem, state: e.target.value})} name="state" placeholder="State" />
            <input type="text" onChange={(e) => setSignupItem({ ...SignupItem, zipcode: e.target.value})} name="zipcode" placeholder="Zipcode" />
            <input type="text" onChange={(e) => setSignupItem({ ...SignupItem, userName: e.target.value})} name="userName" placeholder="username" />
            <input type="text" onChange={(e) => setSignupItem({ ...SignupItem, email: e.target.value})} name="email" placeholder="Email" />
            {/* <input type="text" onClick="button" value="Sign Up" /> */}
            
        </div>
    )
    
};
export default Signup;