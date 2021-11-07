import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter} from 'react-router-dom'
import Login from './components/Login';
import {Route, Switch} from 'react-router-dom'
import Irtsconnect from './components/Irtsconnect';
import Signup from './components/Signup';
import React, {useState, useEffect} from 'react'
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState(null)
  useEffect(()=> {
      auth.onAuthStateChanged(user=>{
        if(user) setUser(user)
        else setUser(null)
      })
  },[])

  return (
    <BrowserRouter>
      
      <Navbar user={user} />
      <Switch>
        <Route exact path= "/">
            <Irtsconnect user={user} />
        </Route>
        <Route path= "/login">
            <Login user={user} />
        </Route>
        <Route path= "/signup">
            <Signup />
        </Route>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
