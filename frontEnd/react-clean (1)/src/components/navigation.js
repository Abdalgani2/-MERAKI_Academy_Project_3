import React from 'react';
import { Link, Route } from "react-router-dom";
export const Loginregister=({token})=> {
  {if(token){
    return (
      <div style={{ border: " 5px solid green" }}>
        <p style={{ border: " 5px solid red" }}>   <Link to="/NewArtical"> New Artical </Link>
          <Link to="/Login">Dashbord  </Link>
        </p>
      </div>
    );
  }
  else{
    return (
      <div style={{ border: " 5px solid green" }}>
        <p style={{ border: " 5px solid red" }}>   <Link to="/Register"> Register </Link>
          <Link to="/Login"> Login </Link>
        </p>
        
      </div>
    );}
  }
  }
  
