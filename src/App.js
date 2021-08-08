import './App.css';
import React, { useState } from 'react';
import HomePage from './HomePage';
import { BrowserRouter as Route} from 'react-router-dom';
import AccessApp from './Components/AccessTheApp';


function App() {
  const  [user, setUser] = useState({name: "", password: ""});
  const [showStore, setShowStore] = useState(false);

  return (
    <div className="App">
      {/* {user.name == "" ? <AccessApp user={user} setUser={setUser}></AccessApp> : <div><h2>Welcome, {user.name}</h2><div>We've missed you!!!</div><br></br><button onClick={()=> setShowStore(true)}>Proceed to Shopping</button></div>} */}
      {user.name == "" ? <AccessApp user={user} setUser={setUser}></AccessApp> : <HomePage></HomePage>}
      

      {/* <Route>
        {showStore ? <HomePage></HomePage> : ""}
                 
      </Route> */}
    </div>
  );
}

export default App;
