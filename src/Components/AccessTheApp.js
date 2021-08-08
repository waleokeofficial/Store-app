import React, { useState } from 'react';

const AccessApp=({user, setUser})=>{
    const [info, setInfo] = useState ({name: "", password: ""});
    let Admin = {
        name: "Olawale5551",
        password: "aaa"
    }

    const LogIn=(details)=>{
        console.log(details);
         
        if (details.name == Admin.name && details.password == Admin.password){
            console.log("This is a User");
            setUser({name: details.name, password: details.password})
        }
        else{
            console.log("not a User");
        }
    }
    // const LogOut=()=>{
    //     console.log("Logged Out");
    // }

    const Submitter =(e)=>{
        e.preventDefault();
        // console.log(e);



        LogIn(info);
    }

    return(
        <div>
            <form onSubmit={Submitter}>
                <h2>Sign In Form</h2>
                <div>
                    <label htmlFor="username">Username:</label><br></br>
                    <input name="username" id="username" onChange={(e)=> setInfo({...info, name: e.target.value})}/>
                </div> <br></br>
                <div>
                    <label htmlFor="password">Password:</label><br></br>
                    <input name="password" id="password" onChange={(e)=> setInfo({...info, password: e.target.value})}/>
                </div> <br></br>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default AccessApp;