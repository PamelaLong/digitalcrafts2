import React, {useState} from "react";
import SignupContainer from 'styled-components';



function Signup() {
    const Signup = useState({});
    
    return(
        <div>
            <input type="text" onChange={(e) => ({ ...Signup, firstName: e.target.value})} name="firstName" placeholder="First Name" />
            <input type="text" onChange={(e) => ({ ...Signup, lastName: e.target.value})} name="lastName" placeholder="Last Name" />
            <input type="date" onChange={(e) => ({ ...Signup, DOB: e.target.value})} name="DOB" placeholder="Date of Birth" />
            <input type="text" onChange={(e) => ({ ...Signup, address: e.target.value})} name="address" placeholder="Address" />
            <input type="text" onChange={(e) => ({ ...Signup, city: e.target.value})} name="city" placeholder="City" />
            <input type="text" onChange={(e) => ({ ...Signup, state: e.target.value})} name="state" placeholder="State" />
            <input type="text" onChange={(e) => ({ ...Signup, zipcode: e.target.value})} name="zipcode" placeholder="Zipcode" />
            <input type="text" onChange={(e) => ({ ...Signup, userName: e.target.value})} name="userName" placeholder="username" />
            <input type="text" onChange={(e) => ({ ...Signup, email: e.target.value})} name="email" placeholder="Email" />
            <input type="button" onClick="button" value="Sign Up" />
            
        </div>
    )
};
export default Signup;