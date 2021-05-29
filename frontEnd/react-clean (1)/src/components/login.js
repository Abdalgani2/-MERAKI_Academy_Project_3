import React,{useState} from 'react';
import { Redirect ,Route,useHistory } from "react-router-dom";
import axios from 'axios';
import {Dashbord }from './dashbord'
export const Login =({setToken})=>{
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [message,setMessage]=useState("")
  const history=useHistory()
  const loginbutton =()=>{
    axios.post(`http://localhost:5000/login`,{email,password}).then((result)=>{
      console.log(result.data)
      setToken(result.data)
      history.push("/Dashbord")
    }).catch((err)=>{
      setMessage(<p>faild log in</p>)
    })
  }
  return(<div> <input
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value)
        }} 
    ></input>
    <input
        type="password"
        placeholder=" Password"
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      ></input>
      <Route path="/Dashbord" component={Dashbord} />
      <button onClick={loginbutton }> Login</button>
      {message}
      </div>);
}
