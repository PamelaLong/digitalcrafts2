import {useState} from "react";

function Form() {
    const [signupForm, setSignupForm] = useState({})
    return (
    <div>
        <h1>LinkIn Signup Form</h1>
        <form action="">
            <input type="text" onChange={(e) => setSignupForm({ ...signupForm, firstName: e.tartget.value})} name="firstName" placeholder="First Name"/>
            <input type="text" onChange={()=>setSignuoForm({ ...signupForm, lasttName: e.tartget.value})} name="lastName" placeholder="Last Name"/>
            <input type="text" onChange={()=>setSignuoForm({ ...signupForm, email: e.tartget.value})} name="email" placeholder="Email"/>
            <input type="button" value="Submit"/>
        </form>
        </div>
    );
    };
export default Form;