import React, {useState} from "react";
import Display from "./Display";
const UserForm = (props) => {
    const[firstname, setFirstname] = useState("");
    const[lastname, setLastname] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmpassword, setconfirmpassword] = useState("");


return(
    <fieldset>
        <h1>Form</h1>
        <p>
        <label>First Name: </label>
        <input type="text" name="firstname" onChange={(e) => setFirstname(e.target.value)} value={firstname}/>
        <p>
        <label>Last Name: </label>
        <input type="text" name="lastname" onChange={(e) => setLastname(e.target.value)} value={lastname}/>
        </p>
        <p>
            <label>Email: </label>
            <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </p>
        <p>
            <label>Password: </label>
            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
        </p>
        <p>
            <label>Confirm Password: </label>
            <input type="password" name="confirmpassword" onChange={(e) => setconfirmpassword(e.target.value)} value={confirmpassword}/>
        </p>
        </p>
        <p><Display firstname ={firstname} lastname = {lastname} email={email} password ={password} confirmpassword ={confirmpassword}/>
        </p>  
    </fieldset>
)
}

export default UserForm;