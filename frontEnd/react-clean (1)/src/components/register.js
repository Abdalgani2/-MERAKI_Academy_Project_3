import React,{ useState } from 'react';
import axios from 'axios';
export const Register=()=>{
  const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [age, setAge] = useState(0);
const [country, setCountry] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [message,setMessage]=useState("")
const messageresult =()=>{
  consle.log("the fun run")
  if (message){
    return "the users add"
  }
  else{
    return "the users not add"
  }
}
const registerButon=()=>{
  axios.post(`http://localhost:5000/users`,
  {firstName,
    lastName,
    age,
    country,
    email,
    password}).then( (result)=>{
        setMessage(<p>the user is add</p>)
  }).catch(()=>{
    setMessage(<p>the user is not add</p>)
  })
} 
const registerFun=()=>{
  console.log("the function called")
  if(message=="faild"){
    return <p>error not register .try agin</p>
  }
  else{return<p> register new user</p>}
}
   return (<div><div style={{ border:" 5px solid blue",width:"200px"}}> <input
        type="text"
        placeholder="First Name"
        onChange={(e) => {
          setFirstName(e.target.value)
        }}
    ></input>
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => {
          setLastName(e.target.value)
        }}
      ></input>
      <input
        type="number"
        placeholder="Age"
        onChange={(e) => {
          setAge(e.target.value)
        }}
      ></input>
      <input
        type="text"
        placeholder="country"
        onChange={(e) => {
          setCountry(e.target.value)
        }}
      ></input>
      <input
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
      <button onClick={ registerButon}> Register</button>
      </div>
      {message}
       {console.log({message})}
      </div>);
}