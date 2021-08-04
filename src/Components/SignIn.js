import React from 'react';

function Signin(){

    return(
        <div className="row">
            <div className="col-1"></div>
            <div className="col-2">
                <h2>Sign In</h2>
                <div>
                    <label>Username</label>
                    <input></input>
                </div>
                <div>
                    <label>Password</label>
                    <input></input>
                </div>
                <div>
                    <button>Sign In</button>
                </div>
            </div>
            <div className="col-1"></div>
        </div>
    )

}

export default Signin;