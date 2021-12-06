import React from 'react';
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className="login">
      <h1>Login Page</h1>
      <form className="login-form">
        <label for="email">Email</label>
        <input type="email" id="email" required></input>
        <label for="password">Password</label>
        <input id="password" type="password" required></input>
        <button type="submit" id="btn-login">Login</button>
        
      </form>
      <p>Not registered?  <Link to="/register">Register</Link></p>
    </div>
  );
}

export default Login;