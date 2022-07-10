import React from "react";
const Display = (props) => {
return(
    <fieldset>
        <h1>Your Form Data</h1>
        <p>First Name: {props.firstname}</p>
        <p>Last Name: {props.lastname}</p>
        <p>Email: {props.email}</p>
        <p>Password: {props.password}</p>
        <p>Confirm Password: {props.confirmpassword}</p>
    </fieldset>

)
}

export default Display