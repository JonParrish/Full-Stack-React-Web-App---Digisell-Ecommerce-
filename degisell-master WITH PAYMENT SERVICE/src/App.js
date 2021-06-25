import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Store from "./pages/Store";
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';


export default function App() {
const [user, setUser] = useState(false);

  return (
    <Router>
      <Navbar
        session = {user}
        setUser = {setUser}
      />
      <Switch>
        <Route exact path="/Store" >
          <Store/>
        </Route>
        <Route exact path="/" >
          <Register
            setUser = {setUser}
          />
        </Route>
        <Route exact path="/Login" >
          <Login
            setUser = {setUser}
          />
        </Route>
      </Switch>
    </Router>
  );
}
