import React from 'react'
import './signin.css'
function signin() {
    return (
        <div className="signin">
            <div className="main-body-signin">
          <h1>Sign In</h1>    
          <form className="form-signIn">
              <input type="text" className="input-text" placeholder="Email"></input>
              <input type="text" className="input-text" placeholder="Password"></input>
              <submit className="submit-button-signIn">Login</submit>
          </form>
          <p>Create Account? Sign Up</p>
          </div>  
        </div>
    )
}

export default signin
