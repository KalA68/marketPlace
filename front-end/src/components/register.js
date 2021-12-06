import React from 'react';

function Register () {
    return(
        <div className="register">
            <h1>Register Page</h1>
            <form className="login-form">
                <label for="name">Name</label>
                <input type="text" id="name" required></input>
                <label for="email">Email</label>
                <input type="email" id="email" required></input>
                <label for="password">Password</label>
                <input id="password" type="password" required></input>
                <button type="submit" id="btn-register">Register</button>
            </form>
        </div>
    );
}

export default Register;