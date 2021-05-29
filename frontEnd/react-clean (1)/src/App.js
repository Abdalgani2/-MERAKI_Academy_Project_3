import React,{useState} from 'react';
import { Link, Route } from "react-router-dom";
import { Loginregister } from './components/navigation';
import { Register } from './components/register';
import { Login } from './components/login'
import { Dashbord } from './components/dashbord';
import {NewArtical} from './components/newArtical'
import './App.css';
export default function App() {
  const [token,setToken]=useState("")
  return (
    <div><Loginregister token={token} />
    <Route path="/Login" render={()=><Login setToken={setToken}/>}/>
    <Route path="/Register" component={Register}/>
    <Route path="/Dashbord" component={Dashbord}/>
    <Route path="/NewArtical" render={()=><NewArtical token={token}/>}/>
    
    
    </div>)
}
