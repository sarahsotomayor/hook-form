import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState ("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);  // default value of false
    
    const createUser = (e) => {
        //prevents default refresh of the browser to keep state from being reset
        e.preventDefault(); 

        //create js object to hold values
        const newUser = { firstName, lastName, email, password, confirmPassword };

        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        //updating state will change the message displayed on form
        setHasBeenSubmitted( true );
    };

/*     const formMessage = () => {
        if( setHasBeenSubmitted ) {
            return("Thank you for submitting the form!");
        } 
        else {
            return("Welcome, please submit the form");
        }
    }; */

    return(
        <div>
        <form onSubmit={ createUser }>
            { //replaces the formMessage function above using ternary operators
                hasBeenSubmitted ?
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form</h3>
            }
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ (e) => setFirstName(e.target.value)} value={ firstName }/>
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ (e) => setLastName(e.target.value)} value={ lastName }/>
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={ (e) => setEmail(e.target.value)} value={ email }/>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value)} value={ password }/>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
            </div>
            <input type="submit" value="Create User" />
        </form>
        <section>
            <h2>Your Form Data</h2>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Email: {props.email}</p>
            <p>Password: {props.password}</p>
            <p>Confirm Password: {props.confirmPassword}</p>
        </section>
        </div>
    );
};

export default UserForm;