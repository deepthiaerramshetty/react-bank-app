import React from "react"

export default function Login(){
  
    return (
        <div className="ui fixed menu">
            <h2>Login</h2>
            <div className="ui container center">
                
                <form className="ui form">
                <div className="field">
                    <label>UserName</label>
                    <input type = "text" name ="UserName" placeholder="UserName"></input>
                    
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type = "text" name ="Password" placeholder="Password"></input>
                    
                </div>
                <button className="ui button blue">Login</button>

            </form>
            </div>
        </div>
    )
    
}

