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
            alert("not a User");
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
        <div className="access-the-app-signin-page">
            <form onSubmit={Submitter}>
                <h2>Sign In</h2>
                <div>
                    <label htmlFor="username">Username</label><br></br>
                    <input name="username" id="username" type="text" placeholder="Enter Username" onChange={(e)=> setInfo({...info, name: e.target.value})}/>
                </div> <br></br>
                <div>
                    <label htmlFor="password">Password</label><br></br>
                    <input name="password" id="password" type="password" placeholder="Enter Password" onChange={(e)=> setInfo({...info, password: e.target.value})}/>
                </div> <br></br>
                <input type="submit" className="button"></input>
            </form>
        </div>
    )
}

export default AccessApp;