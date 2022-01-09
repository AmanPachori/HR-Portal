import React from 'react'
import './signup.css'
function signup() {
    return (
        <div className="signup">
          <div className="main-body">
          <h1>Sign Up</h1>    
          <form className="form-signup">
              <input type="text" className="input-text" placeholder="Name"></input>
              <input type="text" className="input-text" placeholder="Email"></input>
              <input type="text" className="input-text" placeholder="Password"></input>
              <input type="text" className="input-text" placeholder="Re-Enter Password"></input>
              <submit className="submit-button">Create Account</submit>
          </form>
          <p>Already Have An Account? Sign In</p>
          </div>  
        </div>
    )
}

export default signup
